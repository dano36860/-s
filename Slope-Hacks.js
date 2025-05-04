/*
// Enhanced Slope Hacks - Console Library
// Copy this entire script into a bookmarklet or browser console
*/

javascript:(function() {
    function enableSlopeHacks() {
        // Check if gameInstance and Module are available
        if (!window.gameInstance || !window.gameInstance.Module) {
            alert("Game instance not found or not initialized! Make sure you're on the Slope game page.");
            return false;
        }

        // Import required dependencies from slope.html
        // FSM and prefab addresses
        try {
            window.fsms = [29016368, 29016064, 29224512, 29224208, 29223904, 29223600, 29222384, 29222080, 30522336, 30522032, 29016672, 29016976];
            window.morefsms = [33402432,33402128,33401824,33401520,33401216,33400912,33400608,33400304,33400000,33399696,33399392,33399088,33398784,33545792,33545488,33545184,33692640];
            window.prefabs = [33308736, 25272688, 25272528, 25272624, 25272640, 25272544, 25272560, 25272576, 25272880, 25272896, 25272816, 25272832, 25272848, 25272592, 25272608, 25272656, 25272928, 25272912, 37954832, 25272736, 25272720, 25272864, 25272480, 25272768, 25272784, 25272496, 25272704, 25272800, 25272752, 25272464, 25272944, 25272976];
            window.readGameObjects = true;
            window.keys = [];
            window.running = true;
            window.nowPatch = false;
        } catch (e) {
            console.error("Error initializing variables:", e);
        }

        // Important memory addresses
        const BallRb = 41991744; // Rigidbody
        const zForce = 0x01cd5c98;
        const yForce = 0x01cd5cb8;
        const SteerForceRight = 0x01d46af8;
        const SteerForceLeft = 0x01d46b18;
        const scoreAddress = 7674510; // Updated to match exactly slope.html
        const GameObjectBall = 32936032;
        const FsmOwnerBall = 29249256; // FsmOwnerDefault
        const SphereGameObject = 25273360;
        const ScoreGUIText = 34322048; // GUIText
        const PlayMakerFSMType = 25281808; // MonoType
        const TransformType = 33380392; // MonoType
        const SpawnPoolsDict = 42162888; // SpawnPoolDict
        const SpawnPool = 25323200; // SpawnPool
        const RigidbodyType = 42161928; // MonoType
        const maxRepeats = 30562168; //int32
        const BlockLength = 30562360;
        const sceneHandle = 4294967234;

        // Add keyboard event listeners with error handling
        try {
            document.addEventListener("keydown", e => {
                if (window.keys.indexOf(e.keyCode) == -1) {
                    window.keys.push(e.keyCode);
                }
            });
            document.addEventListener("keyup", e => {
                window.keys.splice(window.keys.indexOf(e.keyCode), 1);
            });
        } catch (e) {
            console.error("Error adding keyboard event listeners:", e);
        }

        // Helper functions with error handling

        function read32(loc) {
            try {
                return new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc/4];
            } catch (e) {
                console.error("Error in read32:", e, loc);
                return 0;
            }
        }

        function set32(loc, val) {
            try {
                new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc/4] = val;
            } catch (e) {
                console.error("Error in set32:", e, loc, val);
            }
        }

        function readFloat32(loc) {
            try {
                return new Float32Array(window.gameInstance.Module.wasmMemory.buffer)[loc/4];
            } catch (e) {
                console.error("Error in readFloat32:", e, loc);
                return 0;
            }
        }

        function setFloat32(loc, val) {
            try {
                new Float32Array(window.gameInstance.Module.wasmMemory.buffer)[loc/4] = val;
            } catch (e) {
                console.error("Error in setFloat32:", e, loc, val);
            }
        }

        function read8(loc) {
            try {
                return new Uint8Array(window.gameInstance.Module.wasmMemory.buffer)[loc];
            } catch (e) {
                console.error("Error in read8:", e, loc);
                return 0;
            }
        }

        function set8(loc, val) {
            try {
                new Uint8Array(window.gameInstance.Module.wasmMemory.buffer)[loc] = val;
            } catch (e) {
                console.error("Error in set8:", e, loc, val);
            }
        }

        function read16(loc) {
            try {
                return new Uint16Array(window.gameInstance.Module.wasmMemory.buffer)[loc/2];
            } catch (e) {
                console.error("Error in read16:", e, loc);
                return 0;
            }
        }

        function set16(loc, val) {
            try {
                new Uint16Array(window.gameInstance.Module.wasmMemory.buffer)[loc/2] = val;
            } catch (e) {
                console.error("Error in set16:", e, loc, val);
            }
        }

        function readString(ptr) {
            try {
                let str = "";
                const len = read32(ptr+0x8);
                if(len < 0 || len > 1e3) {
                    console.log("Not a string!");
                    return;
                }
                for(var i = 0; i < len*2; i += 2) {
                    str += String.fromCharCode(read16(ptr+0xC+i));
                }
                return str;
            } catch (e) {
                console.error("Error in readString:", e, ptr);
                return "";
            }
        }

        function writeString(ptr, str) {
            try {
                set32(ptr+0x8, str.length);
                for(let i = 0; i < str.length*2; i += 2) {
                    set16(ptr+0xC+i, str.charCodeAt(i/2));
                }
            } catch (e) {
                console.error("Error in writeString:", e, ptr, str);
            }
        }

        function readChar(ptr) {
            try {
                let i = 0;
                let out = "";
                while(read8(ptr+i) != 0) {
                    out += String.fromCharCode(read8(ptr+i));
                    i++;
                    if(i > 100) {
                        return null;
                    }
                }
                return out;
            } catch (e) {
                console.error("Error in readChar:", e, ptr);
                return "";
            }
        }

        function createString(value) {
            try {
                let ptr = window.gameInstance.Module._malloc(0xC + value.length*2);
                writeString(ptr, value);
                return ptr;
            } catch (e) {
                console.error("Error in createString:", e, value);
                return 0;
            }
        }

        function free(ptr) {
            try {
                window.gameInstance.Module._free(ptr);
            } catch (e) {
                console.error("Error in free:", e, ptr);
            }
        }

        function readPStr(ptr) {
            try {
                return readString(read32(ptr));
            } catch (e) {
                console.error("Error in readPStr:", e, ptr);
                return "";
            }
        }

        // Safe wrappers for memory functions to prevent errors
        function safeRead32(loc) {
            try {
                if (!window.gameInstance || !window.gameInstance.Module || !window.gameInstance.Module.wasmMemory) {
                    return 0;
                }
                return new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc/4] || 0;
            } catch (e) {
                console.error("Error in safeRead32:", e);
                return 0;
            }
        }

        function readArr(ptr, ind) {
            try {
                return read32(ptr+0x10+(ind*4));
            } catch (e) {
                console.error("Error in readArr:", e, ptr, ind);
                return 0;
            }
        }

        function setArr(ptr, ind, value) {
            try {
                return set32(ptr+0x10+(ind*4), value);
            } catch (e) {
                console.error("Error in setArr:", e, ptr, ind, value);
            }
        }

        function readFullArr(ptr) {
            try {
                let i = 0;
                let arr = [];
                while(readArr(ptr,i) != 0) {
                    arr.push(readArr(ptr,i));
                    i++;
                    if(i > 500) {
                        throw "Array is too large.";
                    }
                }
                arr.ptr = ptr;
                return arr;
            } catch (e) {
                console.error("Error in readFullArr:", e, ptr);
                return [];
            }
        }

        function safeReadFullArr(ptr) {
            try {
                let i = 0;
                let arr = [];
                while (i < 500) { // Limit to prevent infinite loops
                    const value = safeRead32(ptr+0x10+(i*4));
                    if (!value) break;
                    arr.push(value);
                    i++;
                }
                arr.ptr = ptr;
                return arr;
            } catch (e) {
                console.error("Error in safeReadFullArr:", e);
                return [];
            }
        }

        function readVec3(ptr) {
            try {
                return {
                    x: readFloat32(ptr),
                    y: readFloat32(ptr+0x4),
                    z: readFloat32(ptr+0x8)
                };
            } catch (e) {
                console.error("Error in readVec3:", e, ptr);
                return {x:0,y:0,z:0};
            }
        }

        function readQuat(ptr) {
            try {
                return {
                    x: readFloat32(ptr),
                    y: readFloat32(ptr+0x4),
                    z: readFloat32(ptr+0x8),
                    w: readFloat32(ptr+0xC)
                };
            } catch (e) {
                console.error("Error in readQuat:", e, ptr);
                return {x:0,y:0,z:0,w:1};
            }
        }

        function setQuat(ptr, vec) {
            try {
                if(vec.x == undefined || vec.y == undefined || vec.z == undefined || vec.w == undefined) {
                    throw "Quaternion must have an x, y, z, and w!";
                }
                setFloat32(ptr, vec.x);
                setFloat32(ptr+0x4, vec.y);
                setFloat32(ptr+0x8, vec.z);
                setFloat32(ptr+0xC, vec.w);
            } catch (e) {
                console.error("Error in setQuat:", e, ptr, vec);
            }
        }

        function getPos() {
            try {
                let ptr = window.gameInstance.Module._malloc(12);
                window.gameInstance.Module.dynCall_viii(1927, BallRb, ptr);
                let ret = {
                    x: readFloat32(ptr),
                    y: readFloat32(ptr+4),
                    z: readFloat32(ptr+8)
                };
                window.gameInstance.Module._free(ptr);
                return ret;
            } catch (e) {
                console.error("Error in getPos:", e);
                return {x:0,y:0,z:0};
            }
        }

        function setPos(x, y, z) {
            try {
                let ptr = window.gameInstance.Module._malloc(12);
                setFloat32(ptr, x);
                setFloat32(ptr+0x4, y);
                setFloat32(ptr+0x8, z);
                window.gameInstance.Module.dynCall_viii(1928, BallRb, ptr);
                window.gameInstance.Module._free(ptr);
            } catch (e) {
                console.error("Error in setPos:", e, x, y, z);
            }
        }

        function set_UseGravity(rb, val) {
            try {
                window.gameInstance.Module.dynCall_viii(1922, BallRb, val ? 1 : 0);
            } catch (e) {
                console.error("Error in set_UseGravity:", e, rb, val);
            }
        }

        function SetVelocity(fvec) {
            try {
                let vec3 = window.gameInstance.Module._malloc(12);
                setFloat32(vec3, fvec.x);
                setFloat32(vec3+4, fvec.y);
                setFloat32(vec3+8, fvec.z);
                window.gameInstance.Module.dynCall_viii(1919, BallRb, vec3);
                window.gameInstance.Module._free(vec3);
            } catch (e) {
                console.error("Error in SetVelocity:", e, fvec);
            }
        }

        function AddForce(fvec, mode) {
            try {
                let vec3 = window.gameInstance.Module._malloc(12);
                setFloat32(vec3, fvec.x);
                setFloat32(vec3+4, fvec.y);
                setFloat32(vec3+8, fvec.z);
                window.gameInstance.Module.dynCall_viiiii(391, 0, BallRb, vec3, mode);
                window.gameInstance.Module._free(vec3);
            } catch (e) {
                console.error("Error in AddForce:", e, fvec, mode);
            }
        }

        function get_GameObject(name) {
            try {
                let str = createString(name);
                let GameObject = window.gameInstance.Module.dynCall_iiii(1532, 0, str);
                free(str);
                return GameObject;
            } catch (e) {
                console.error("Error in get_GameObject:", e, name);
                return 0;
            }
        }

        function get_PlayMakerFSM(gameObject, fsmName="FSM") {
            try {
                let ptr = createString("FSM");
                let ret = window.gameInstance.Module.dynCall_iiiii(3376, 0, gameObject, ptr);
                free(ptr);
                return ret;
            } catch (e) {
                console.error("Error in get_PlayMakerFSM:", e, gameObject, fsmName);
                return 0;
            }
        }

        function getGameObjectName(ptr) {
            try {
                const out = window.gameInstance.Module.dynCall_iii(2477, ptr);
                return readString(out);
            } catch (e) {
                console.error("Error in getGameObjectName:", e, ptr);
                return "";
            }
        }

        function readGameObject(ptr) {
            try {
                return {
                    name: getGameObjectName(ptr),
                    ptr
                };
            } catch (e) {
                console.error("Error in readGameObject:", e, ptr);
                return {name:"",ptr:ptr};
            }
        }

        function getFsmGameObject(ptr) {
            try {
                return window.gameInstance.Module.dynCall_iii(3114, ptr);
            } catch (e) {
                console.error("Error in getFsmGameObject:", e, ptr);
                return 0;
            }
        }

        // Fix for readFsmVariables to handle null pointers
        function readFsmVariables(ptr) {
            try {
                if (!ptr) return { floatVars: [], intVars: [], boolVars: [], stringVars: [] };

                return {
                    floatVars: safeReadFullArr(safeRead32(ptr+0x8)).map(e => readNamedVariable(e)),
                    intVars: safeReadFullArr(safeRead32(ptr+0xC)).map(e => readNamedVariable(e)),
                    boolVars: safeReadFullArr(safeRead32(ptr+0x10)).map(e => readNamedVariable(e)),
                    stringVars: safeReadFullArr(safeRead32(ptr+0x14)).map(e => readNamedVariable(e))
                };
            } catch (e) {
                console.error("Error in readFsmVariables:", e);
                return { floatVars: [], intVars: [], boolVars: [], stringVars: [] };
            }
        }

        function readFsmEvent(ptr) {
            try {
                return {
                    name: readPStr(ptr+0x8),
                    isSystemEvent: read8(ptr+0xC),
                    isGlobal: read8(ptr+0xD),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmEvent:", e, ptr);
                return {name:"",isSystemEvent:0,isGlobal:0,ptr:ptr};
            }
        }

        function readFsmStateAction(ptr) {
            try {
                return {
                    name: readPStr(ptr+0x8),
                    type: readClassName(ptr),
                    enabled: read8(ptr+0xC),
                    isOpen: read8(ptr+0xD),
                    active: read8(ptr+0xE),
                    finished: read8(ptr+0xF),
                    autoName: read8(ptr+0x10),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmStateAction:", e, ptr);
                return {name:"",type:"",enabled:0,isOpen:0,active:0,finished:0,autoName:0,ptr:ptr};
            }
        }

        function readFsmTransitions(ptr) {
            try {
                return {
                    toState: readPStr(ptr+0xC),
                    fsmEvent: readFsmEvent(read32(ptr+0x8)),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmTransitions:", e, ptr);
                return {toState:"",fsmEvent:null,ptr:ptr};
            }
        }

        function readClassName(il2cppobjectptr) {
            try {
                return readChar(read32(read32(il2cppobjectptr)+0x8));
            } catch (e) {
                console.error("Error in readClassName:", e, il2cppobjectptr);
                return "";
            }
        }

        function readClassNamespace(il2cppobjectptr) {
            try {
                return readChar(read32(read32(il2cppobjectptr)+0xc));
            } catch (e) {
                console.error("Error in readClassNamespace:", e, il2cppobjectptr);
                return "";
            }
        }

        function readNamedVariable(ptr) {
            try {
                return {
                    useVariable: read8(ptr+0x8),
                    name: readPStr(ptr+0xC),
                    tooltip: readPStr(ptr+0x10),
                    showInInspector: read8(ptr+0x14),
                    networkSync: read8(ptr+0x15),
                    ptr
                };
            } catch (e) {
                console.error("Error in readNamedVariable:", e, ptr);
                return {useVariable:0,name:"",tooltip:"",showInInspector:0,networkSync:0,ptr:ptr};
            }
        }

        function readFsmState(ptr) {
            try {
                return {
                    name: readPStr(ptr+0x18),
                    activeActionIndex: read32(ptr+0x10),
                    activeAction: (read32(ptr+0xC) !== 0) ? readFsmStateAction(read32(ptr+0xC)) : null,
                    desc: readPStr(ptr+0x1C),
                    active: read8(ptr+0x8),
                    finished: read8(ptr+0x9),
                    actions: safeReadFullArr(read32(ptr+0x3C)).map(e => readFsmStateAction(e)),
                    transitions: safeReadFullArr(read32(ptr+0x38)).map(e => readFsmTransitions(e)),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmState:", e, ptr);
                return {name:"",activeActionIndex:0,activeAction:null,desc:"",active:0,finished:0,actions:[],transitions:[],ptr:ptr};
            }
        }

        function readFsm(fsm) {
            try {
                if (!fsm) return { name: "Unknown", events: [], states: [], variables: { floatVars: [], intVars: [], boolVars: [], stringVars: [] }, globalTransitions: [], ptr: 0 };

                return {
                    name: readString(read32(fsm+0x18)) || "Unknown",
                    GameObject: readGameObjects ? readGameObject(getFsmGameObject(fsm)) : null,
                    events: safeReadFullArr(read32(fsm+0x24)).map(e => readFsmEvent(e)),
                    startState: readString(read32(fsm+0x1C)) || "",
                    dataVersion: read32(fsm+0xC) || 0,
                    states: safeReadFullArr(read32(fsm+0x20)).map(e => readFsmState(e)),
                    variables: readFsmVariables(read32(fsm+0x2C)),
                    globalTransitions: safeReadFullArr(read32(fsm+0x28)).map(e => readFsmTransitions(e)),
                    PlayMakerFSM: window.gameInstance.Module.dynCall_iii(3117, fsm),
                    ptr: fsm
                };
            } catch (e) {
                console.error("Error in readFsm:", e);
                return { name: "Error", events: [], states: [], variables: { floatVars: [], intVars: [], boolVars: [], stringVars: [] }, globalTransitions: [], ptr: 0 };
            }
        }

        function readList(ptr) {
            try {
                let list = [];
                let len = window.gameInstance.Module.dynCall_iii(4408, ptr);
                for(var i = 0; i < len; i++) {
                    list.push(window.gameInstance.Module.dynCall_iiii(2392, ptr, i));
                }
                return list;
            } catch (e) {
                console.error("Error in readList:", e, ptr);
                return [];
            }
        }

        function readFsms() {
            try {
                return readList(window.gameInstance.Module.dynCall_iii(3073)).map(e => readFsm(e));
            } catch (e) {
                console.error("Error in readFsms:", e);
                return [];
            }
        }

        function noDeath() {
            try {
                [30247888, 29188840, 29220272, 30703504, 29163616, 25388496].forEach(e => set32(read32(e+0xC)+0x8, 0));
                window.gameInstance.Module.dynCall_vii(7174, 37783424);
                alert("No Death Activated! Reload to undo! (Score will be broken if not run on home screen!)");
            } catch (e) {
                console.error("Error in noDeath:", e);
            }
        }

        function death() {
            try {
                window.gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
            } catch (e) {
                console.error("Error in death:", e);
            }
        }

        function resetGame() {
            try {
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30725992); // deathcomplete
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30632936); // destropool
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30726232); // resetgame
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30726088); // collidedeath
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30725992); // deathcomplt
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30248008); // resetpressed
            } catch (e) {
                console.error("Error in resetGame:", e);
            }
        }

        function BroadcastEvent(eventName) {
            try {
                let str = createString(eventName);
                window.gameInstance.Module.dynCall_viiii(1154, 0, str);
                window.gameInstance.Module._free(str);
            } catch (e) {
                console.error("Error in BroadcastEvent:", e, eventName);
            }
        }

        function speedUp() {
            try {
                window.gameInstance.Module.dynCall_viiii(1155, fsms[6], 30725968);
            } catch (e) {
                console.error("Error in speedUp:", e);
            }
        }

        function addSpeedUp() {
            try {
                setFloat32(SteerForceRight, readFloat32(SteerForceRight) + 100);
                setFloat32(SteerForceLeft, readFloat32(SteerForceLeft) - 100);
                setFloat32(yForce, readFloat32(yForce) - 300);
                setFloat32(zForce, readFloat32(zForce) + 30);
            } catch (e) {
                console.error("Error in addSpeedUp:", e);
            }
        }

        function instantiate(prefabptr, pos, rot) {
            try {
                let posp = window.gameInstance.Module._malloc(12);
                setFloat32(posp, pos.x); // x
                setFloat32(posp+0x4, pos.y); // y
                setFloat32(posp+0x8, pos.z); // z
                let rotp = window.gameInstance.Module._malloc(16);
                setFloat32(rotp, rot.x); // x
                setFloat32(rotp+0x4, rot.y); // y
                setFloat32(rotp+0x8, rot.z); // z
                setFloat32(rotp+0xc, rot.w); // w
                return window.gameInstance.Module.dynCall_iiiiii(345, 0, prefabptr, posp, rotp);
            } catch (e) {
                console.error("Error in instantiate:", e, prefabptr, pos, rot);
                return 0;
            }
        }

        function getRandState() {
            try {
                return [read32(0x1ea000), read32(0x1ea004), read32(0x1ea008), read32(0x1ea00c)];
            } catch (e) {
                console.error("Error in getRandState:", e);
                return [0,0,0,0];
            }
        }

        function setRandState(val) {
            try {
                if(val.length !== 4) {
                    throw "Must have 4 states!";
                }
                set32(0x1ea000, val[0]);
                set32(0x1ea004, val[1]);
                set32(0x1ea008, val[2]);
                set32(0x1ea00c, val[3]);
            } catch (e) {
                console.error("Error in setRandState:", e, val);
            }
        }

        function GetVelocity() {
            try {
                let vec3 = window.gameInstance.Module._malloc(12);
                window.gameInstance.Module.dynCall_viii(1920, BallRb, vec3);
                let vel = {
                    x: readFloat32(vec3),
                    y: readFloat32(vec3 + 4),
                    z: readFloat32(vec3 + 8)
                };
                window.gameInstance.Module._free(vec3);
                return vel;
            } catch (e) {
                console.error("Error in GetVelocity:", e);
                return {x:0,y:0,z:0};
            }
        }

        // Search utility functions to make the script work on any Slope website
        function searchFor(str) {
            try {
                let buffer = new Uint8Array(window.gameInstance.Module.wasmMemory.buffer);
                for(var i = 0; i < buffer.length; i += 2048) {
                    const buf = [...buffer.subarray(i, i+2048)].map(e => String.fromCharCode(e)).join("");
                    if(buf.includes(str)) {
                        console.log(i + buf.indexOf(str));
                    }
                }
            } catch (e) {
                console.error("Error in searchFor:", e, str);
            }
        }

        function read(loc, len) {
            try {
                return [...new Uint8Array(window.gameInstance.Module.wasmMemory.buffer).subarray(loc, loc+len)].map(e => String.fromCharCode(e)).join("");
            } catch (e) {
                console.error("Error in read:", e, loc, len);
                return "";
            }
        }

        function searchFor16(str) {
            try {
                str = str.split("").map(e => e + "\x00").join("");
                let buffer = new Uint8Array(window.gameInstance.Module.wasmMemory.buffer);
                for(var i = 0; i < 55000000; i += 2048) {
                    const buf = [...buffer.subarray(i, i+2048)].map(e => String.fromCharCode(e)).join("");
                    if(buf.includes(str)) {
                        console.log(i + buf.indexOf(str) - 12);
                    }
                }
            } catch (e) {
                console.error("Error in searchFor16:", e, str);
            }
        }

        function searchFor16arr(str) {
            try {
                let retarr = [];
                str = str.split("").map(e => e + "\x00").join("");
                let buffer = new Uint8Array(window.gameInstance.Module.wasmMemory.buffer);
                for(var i = 0; i < 55000000; i += 2048) {
                    const buf = [...buffer.subarray(i, i+2048)].map(e => String.fromCharCode(e)).join("");
                    if(buf.includes(str)) {
                        retarr.push(i + buf.indexOf(str) - 12);
                    }
                }
                return retarr;
            } catch (e) {
                console.error("Error in searchFor16arr:", e, str);
                return [];
            }
        }

        function searchForFloat(val) {
            try {
                const arr = new Float32Array(window.gameInstance.Module.wasmMemory.buffer);
                let addrs = [];
                for(var i = 0; i < arr.length; i++) {
                    if(arr[i] == val) {
                        addrs.push(i * 4);
                    }
                }
                return addrs;
            } catch (e) {
                console.error("Error in searchForFloat:", e, val);
                return [];
            }
        }

        function searchForInt32(val) {
            try {
                const arr = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                let addrs = [];
                for(var i = 0; i < arr.length; i++) {
                    if(arr[i] == val) {
                        addrs.push(i * 4);
                    }
                }
                return addrs;
            } catch (e) {
                console.error("Error in searchForInt32:", e, val);
                return [];
            }
        }

        function searchForVar(name) {
            try {
                var strs = searchFor16arr(name);
                var possiblities = strs.map(e => {
                    const ptrs = searchForInt32(e);
                    if(ptrs.length > 1) {
                        throw "more than 1 pointer found!";
                    }
                    return ptrs[0] - 0xC;
                });
                return possiblities.filter(e => {
                    if(read8(e + 0x8) > 1) {
                        return;
                    }
                    if(read8(e + 0x14) > 1) {
                        return;
                    }
                    if(read8(e + 0x15) > 1) {
                        return;
                    }
                    return !0;
                }).map(e => e + 0x18);
            } catch (e) {
                console.error("Error in searchForVar:", e, name);
                return [];
            }
        }

        // Store original values for later restoration
        const originalState = {
            // No Death
            deathAddresses: [30247888, 29188840, 29220272, 30703504, 29163616, 25388496],
            deathValues: [],

            // Speed
            zForceValue: readFloat32(zForce),
            yForceValue: readFloat32(yForce),
            steerRightValue: readFloat32(SteerForceRight),
            steerLeftValue: readFloat32(SteerForceLeft),

            // Score
            scoreValue: read32(scoreAddress),

            // Position
            startPosition: getPos()
        };

        // Store original death values
        try {
            originalState.deathValues = originalState.deathAddresses.map(addr =>
                read32(read32(addr + 0xC) + 0x8)
            );
        } catch (e) {
            console.error("Error storing original death values:", e);
            originalState.deathValues = [0,0,0,0,0,0];
        }

        // Create the Slope namespace for our console-controlled library
        window.Slope = {
            // Core utility functions
            util: {
                getPos,
                setPos,
                AddForce,
                SetVelocity,
                GetVelocity,
                set_UseGravity,
                resetGame,
                read32,
                set32,
                readFloat32,
                setFloat32,
                // Expose search utilities
                searchFor,
                read,
                searchFor16,
                searchFor16arr,
                searchForFloat,
                searchForInt32,
                searchForVar
            },

            // Game state
            originalState,

            // Hack functions
            hack: {
                // No Death functions
                noDeath: {
                    enable: function() {
                        try {
                            originalState.deathAddresses.forEach(addr => {
                                set32(read32(addr + 0xC) + 0x8, 0);
                            });
                            console.log("No Death mode enabled!");
                            return true;
                        } catch (e) {
                            console.error("Error enabling No Death:", e);
                            return false;
                        }
                    },

                    disable: function() {
                        try {
                            originalState.deathAddresses.forEach((addr, index) => {
                                set32(read32(addr + 0xC) + 0x8, originalState.deathValues[index]);
                            });
                            console.log("No Death mode disabled!");
                            return true;
                        } catch (e) {
                            console.error("Error disabling No Death:", e);
                            return false;
                        }
                    },

                    toggle: function() {
                        try {
                            // Check if currently enabled (check first death trigger)
                            const firstValue = read32(read32(originalState.deathAddresses[0] + 0xC) + 0x8);
                            if (firstValue === 0) {
                                return this.disable();
                            } else {
                                return this.enable();
                            }
                        } catch (e) {
                            console.error("Error toggling No Death:", e);
                            return false;
                        }
                    },

                    isEnabled: function() {
                        try {
                            // Check memory directly
                            const firstValue = read32(read32(originalState.deathAddresses[0] + 0xC) + 0x8);
                            return firstValue === 0;
                        } catch (e) {
                            console.error("Error checking No Death enabled:", e);
                            return false;
                        }
                    }
                },

                // Score functions
                score: {
                    get: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            return view[scoreAddress / 4]; // Direct access to score memory using exact address
                        } catch (e) {
                            console.error("Error getting score:", e);
                            return 0;
                        }
                    },

                    // Basic score set function
                    set: function(value) {
                        try {
                            if (typeof value !== 'number') {
                                console.error("Score must be a number");
                                return false;
                            }
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = value; // Direct access using exact address
                            console.log(`Score set to: ${value}`);
                            return true;
                        } catch (e) {
                            console.error("Error setting score:", e, value);
                            return false;
                        }
                    },

                    // Add 2 to score (same as '2' key in slope.html)
                    addTwo: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] += 2; // Exactly as in slope.html
                            console.log(`Added 2 to score. New score: ${view[scoreAddress / 4]}`);
                            return true;
                        } catch (e) {
                            console.error("Error adding 2 to score:", e);
                            return false;
                        }
                    },

                    // Set score to max (same as '3' key in slope.html)
                    setMax: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = 2147483620; // Exactly as in slope.html
                            console.log("Score set to near maximum: 2147483620");
                            return true;
                        } catch (e) {
                            console.error("Error setting max score:", e);
                            return false;
                        }
                    },

                    // Double score (same as '5' key in slope.html)
                    double: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] *= 2; // Exactly as in slope.html
                            console.log(`Score doubled. New score: ${view[scoreAddress / 4]}`);
                            return true;
                        } catch (e) {
                            console.error("Error doubling score:", e);
                            return false;
                        }
                    },

                    // Decrease score by 1 (same as 'j' key in slope.html)
                    decreaseOne: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4]--; // Exactly as in slope.html
                            console.log(`Decreased score by 1. New score: ${view[scoreAddress / 4]}`);
                            return true;
                        } catch (e) {
                            console.error("Error decreasing score by 1:", e);
                            return false;
                        }
                    },

                    // Increase score by 1 (same as 'k' key in slope.html)
                    increaseOne: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4]++; // Exactly as in slope.html
                            console.log(`Increased score by 1. New score: ${view[scoreAddress / 4]}`);
                            return true;
                        } catch (e) {
                            console.error("Error increasing score by 1:", e);
                            return false;
                        }
                    },

                    // Reset score to 0 (same as '0' key in slope.html)
                    reset: function() {
                        try {
                            // Get direct access to the memory
                            var view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = 0; // Exactly as in slope.html
                            console.log("Score reset to 0");
                            return true;
                        } catch (e) {
                            console.error("Error resetting score:", e);
                            return false;
                        }
                    }
                },

                // Ball Speed functions
                ballSpeed: {
                    _multiplier: 1.0,

                    get: function() {
                        return this._multiplier;
                    },

                    set: function(multiplier) {
                        try {
                            if (typeof multiplier !== 'number' || multiplier <= 0) {
                                console.error("Speed multiplier must be a positive number");
                                return false;
                            }

                            this._multiplier = multiplier;

                            // Forward speed (zForce) - increase this
                            setFloat32(zForce, originalState.zForceValue * multiplier);

                            // Gravity effect - adjust based on speed
                            const gravityMultiplier = multiplier > 1 ? 1.2 : multiplier;
                            setFloat32(yForce, originalState.yForceValue * gravityMultiplier);

                            // Keep steering forces at original values - don't multiply them
                            setFloat32(SteerForceRight, originalState.steerRightValue);
                            setFloat32(SteerForceLeft, originalState.steerLeftValue);

                            console.log(`Applied speed multiplier: ${multiplier}x (only affects forward speed)`);
                            return true;
                        } catch (e) {
                            console.error("Error setting ball speed multiplier:", e, multiplier);
                            return false;
                        }
                    },

                    reset: function() {
                        try {
                            setFloat32(zForce, originalState.zForceValue);
                            setFloat32(yForce, originalState.yForceValue);
                            setFloat32(SteerForceRight, originalState.steerRightValue);
                            setFloat32(SteerForceLeft, originalState.steerLeftValue);

                            this._multiplier = 1.0;
                            console.log("Ball Speed reset to default");
                            return true;
                        } catch (e) {
                            console.error("Error resetting ball speed:", e);
                            return false;
                        }
                    },

                    double: function() {
                        return this.set(this._multiplier * 2);
                    },

                    halve: function() {
                        return this.set(this._multiplier / 2);
                    }
                },

                // Super Jump functions
                superJump: {
                    _jumpForce: 200,

                    setForce: function(force) {
                        try {
                            if (typeof force !== 'number' || force <= 0) {
                                console.error("Jump force must be a positive number");
                                return false;
                            }

                            this._jumpForce = force;
                            console.log(`Jump force set to ${force}`);
                            return true;
                        } catch (e) {
                            console.error("Error setting jump force:", e, force);
                            return false;
                        }
                    },

                    perform: function() {
                        try {
                            const vel = GetVelocity();

                            AddForce({
                                x: 0,
                                y: this._jumpForce,
                                z: vel.z > 0 ? vel.z * 0.5 : 50 // Maintain forward momentum
                            }, 1); // Impulse mode

                            console.log(`Super Jump performed with force: ${this._jumpForce}`);
                            return true;
                        } catch (e) {
                            console.error("Error performing super jump:", e);
                            return false;
                        }
                    }
                },

                // Teleport functions
                teleport: {
                    _savedPositions: [],

                    to: function(x, y, z) {
                        try {
                            if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
                                console.error("Coordinates must be numbers");
                                return false;
                            }

                            setPos(x, y, z);
                            console.log(`Teleported to (${x}, ${y}, ${z})`);
                            return true;
                        } catch (e) {
                            console.error("Error teleporting to position:", e, x, y, z);
                            return false;
                        }
                    },

                    forward: function(distance = 100) {
                        try {
                            const pos = getPos();
                            setPos(pos.x, pos.y, pos.z + distance);
                            console.log(`Teleported ${distance} units forward`);
                            return true;
                        } catch (e) {
                            console.error("Error teleporting forward:", e, distance);
                            return false;
                        }
                    },

                    upward: function(distance = 50) {
                        try {
                            const pos = getPos();
                            setPos(pos.x, pos.y + distance, pos.z);
                            console.log(`Teleported ${distance} units upward`);
                            return true;
                        } catch (e) {
                            console.error("Error teleporting upward:", e, distance);
                            return false;
                        }
                    },

                    toStart: function() {
                        try {
                            setPos(0, 10, 0); // Game start position
                            console.log("Teleported to start position");
                            return true;
                        } catch (e) {
                            console.error("Error teleporting to start:", e);
                            return false;
                        }
                    },

                    savePosition: function(name = "") {
                        try {
                            const pos = getPos();
                            const posName = name || `Position ${this._savedPositions.length + 1}`;

                            this._savedPositions.push({
                                name: posName,
                                x: pos.x,
                                y: pos.y,
                                z: pos.z
                            });

                            console.log(`Saved current position as "${posName}": (${pos.x.toFixed(1)}, ${pos.y.toFixed(1)}, ${pos.z.toFixed(1)})`);
                            return this._savedPositions.length - 1; // Return index of saved position
                        } catch (e) {
                            console.error("Error saving position:", e, name);
                            return -1;
                        }
                    },

                    toSaved: function(index) {
                        try {
                            if (index < 0 || index >= this._savedPositions.length) {
                                console.error(`No saved position at index ${index}`);
                                return false;
                            }

                            const pos = this._savedPositions[index];
                            setPos(pos.x, pos.y, pos.z);
                            console.log(`Teleported to saved position "${pos.name}"`);
                            return true;
                        } catch (e) {
                            console.error("Error teleporting to saved position:", e, index);
                            return false;
                        }
                    },

                    listSaved: function() {
                        try {
                            if (this._savedPositions.length === 0) {
                                console.log("No saved positions");
                                return [];
                            }

                            console.log("Saved positions:");
                            this._savedPositions.forEach((pos, index) => {
                                console.log(`${index}: "${pos.name}" - (${pos.x.toFixed(1)}, ${pos.y.toFixed(1)}, ${pos.z.toFixed(1)})`);
                            });

                            return this._savedPositions;
                        } catch (e) {
                            console.error("Error listing saved positions:", e);
                            return [];
                        }
                    }
                },

                // Gravity functions
                gravity: {
                    toggle: function() {
                        try {
                            const useGravity = !!this.isEnabled();
                            set_UseGravity(BallRb, !useGravity);
                            console.log(`Gravity ${!useGravity ? 'enabled' : 'disabled'}`);
                            return true;
                        } catch (e) {
                            console.error("Error toggling gravity:", e);
                            return false;
                        }
                    },

                    enable: function() {
                        try {
                            set_UseGravity(BallRb, true);
                            console.log("Gravity enabled");
                            return true;
                        } catch (e) {
                            console.error("Error enabling gravity:", e);
                            return false;
                        }
                    },

                    disable: function() {
                        try {
                            set_UseGravity(BallRb, false);
                            console.log("Gravity disabled");
                            return true;
                        } catch (e) {
                            console.error("Error disabling gravity:", e);
                            return false;
                        }
                    },

                    isEnabled: function() {
                        try {
                            // No direct way to check gravity status, using y-velocity as a proxy when stationary
                            const vel = GetVelocity();
                            return vel.y < 0;
                        } catch (e) {
                            console.error("Error checking gravity enabled:", e);
                            return false;
                        }
                    },

                    increase: function(amount = 50) {
                        try {
                            setFloat32(yForce, readFloat32(yForce) - amount);
                            console.log(`Gravity increased (${readFloat32(yForce)})`);
                            return true;
                        } catch (e) {
                            console.error("Error increasing gravity:", e, amount);
                            return false;
                        }
                    },

                    decrease: function(amount = 50) {
                        try {
                            setFloat32(yForce, readFloat32(yForce) + amount);
                            console.log(`Gravity decreased (${readFloat32(yForce)})`);
                            return true;
                        } catch (e) {
                            console.error("Error decreasing gravity:", e, amount);
                            return false;
                        }
                    },

                    reset: function() {
                        try {
                            setFloat32(yForce, originalState.yForceValue);
                            console.log(`Gravity reset to default (${originalState.yForceValue})`);
                            return true;
                        } catch (e) {
                            console.error("Error resetting gravity:", e);
                            return false;
                        }
                    }
                },

                // Fly mode functions
                fly: {
                    _enabled: false,
                    _flyInterval: null,
                    _speed: 5,
                    _keys: {},

                    enable: function() {
                        try {
                            if (this._enabled) return true;

                            // Disable gravity
                            set_UseGravity(BallRb, false);

                            // Initialize key tracking
                            this._keys = {};

                            // Key handler functions
                            this._handleKeyDown = (e) => {
                                this._keys[e.code] = true;
                            };

                            this._handleKeyUp = (e) => {
                                this._keys[e.code] = false;
                            };

                            // Add event listeners
                            document.addEventListener('keydown', this._handleKeyDown);
                            document.addEventListener('keyup', this._handleKeyUp);

                            // Start fly interval
                            this._flyInterval = setInterval(() => {
                                if (!this._enabled) return;

                                // Get current position
                                const pos = getPos();

                                // Calculate new position based on keys
                                let moveX = 0, moveY = 0, moveZ = 0;

                                if (this._keys['KeyW']) moveZ += this._speed;
                                if (this._keys['KeyS']) moveZ -= this._speed;
                                if (this._keys['KeyA']) moveX -= this._speed;
                                if (this._keys['KeyD']) moveX += this._speed;
                                if (this._keys['Space']) moveY += this._speed;
                                if (this._keys['ShiftLeft'] || this._keys['ShiftRight']) moveY -= this._speed;

                                // Set new position
                                setPos(pos.x + moveX, pos.y + moveY, pos.z + moveZ);

                                // Stop all velocity to prevent physics from interfering
                                SetVelocity({x: 0, y: 0, z: 0});

                            }, 16); // 60fps update

                            this._enabled = true;
                            console.log("Fly mode enabled! Use WASD to move, SPACE for up, SHIFT for down");
                            return true;
                        } catch (e) {
                            console.error("Error enabling fly mode:", e);
                            return false;
                        }
                    },

                    disable: function() {
                        try {
                            if (!this._enabled) return true;

                            // Clear interval
                            if (this._flyInterval) {
                                clearInterval(this._flyInterval);
                                this._flyInterval = null;
                            }

                            // Remove event listeners
                            if (this._handleKeyDown)
                                document.removeEventListener('keydown', this._handleKeyDown);
                            if (this._handleKeyUp)
                                document.removeEventListener('keyup', this._handleKeyUp);

                            // Re-enable gravity
                            set_UseGravity(BallRb, true);

                            this._enabled = false;
                            console.log("Fly mode disabled");
                            return true;
                        } catch (e) {
                            console.error("Error disabling fly mode:", e);
                            return false;
                        }
                    },

                    setSpeed: function(speed) {
                        try {
                            if (typeof speed !== 'number' || speed <= 0) {
                                console.error("Speed must be a positive number");
                                return false;
                            }

                            this._speed = speed;
                            console.log(`Fly speed set to ${speed}`);
                            return true;
                        } catch (e) {
                            console.error("Error setting fly speed:", e, speed);
                            return false;
                        }
                    },

                    toggle: function() {
                        try {
                            return this._enabled ? this.disable() : this.enable();
                        } catch (e) {
                            console.error("Error toggling fly mode:", e);
                            return false;
                        }
                    },

                    isEnabled: function() {
                        return this._enabled;
                    }
                }
            }
        };

        // Update triggerDeath to use the Slope API
        function triggerDeath() {
            try {
                // Check if No Death mode is enabled - check memory directly
                const firstValue = read32(read32(originalState.deathAddresses[0] + 0xC) + 0x8);
                const godmodeEnabled = (firstValue === 0);

                // If godmode is enabled, temporarily disable it
                if (godmodeEnabled) {
                    console.log("Triggering death with godmode: temporarily disabling godmode");

                    // First disable all death triggers (turn off godmode)
                    originalState.deathAddresses.forEach((addr, index) => {
                        set32(read32(addr + 0xC) + 0x8, originalState.deathValues[index]);
                    });

                    // Trigger death
                    window.gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
                    console.log("Death triggered with godmode temporarily disabled");

                    // Re-enable godmode
                    originalState.deathAddresses.forEach(addr => {
                        set32(read32(addr + 0xC) + 0x8, 0);
                    });
                    console.log("Godmode re-enabled after death");
                } else {
                    // Normal death trigger
                    window.gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
                    console.log("Death triggered via direct call");
                }
            } catch (e) {
                console.error("Error in triggerDeath:", e);
            }
        }

        // Update the util object to use the new triggerDeath function
        window.Slope.util.triggerDeath = triggerDeath;

        // Godmode is disabled by default
        console.log("Godmode (No Death) is disabled by default");

        // Print usage instructions
        console.log("%c Slope Hacks Library Loaded! ", "background: #222; color: #bada55; font-size: 18px;");
        console.log("%c Available commands: ", "background: #222; color: #ffffff; font-size: 14px;");
        console.log("");
        console.log("%c // No Death ", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.noDeath.enable()");
        console.log("Slope.hack.noDeath.disable()");
        console.log("Slope.hack.noDeath.toggle()");
        console.log("");
        console.log("%c // Score", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.score.get()");
        console.log("Slope.hack.score.set(1000)");
        console.log("Slope.hack.score.addTwo()"); // Added function
        console.log("Slope.hack.score.setMax()"); // Added function
        console.log("Slope.hack.score.double()"); // Added function
        console.log("Slope.hack.score.decreaseOne()"); // Added function
        console.log("Slope.hack.score.increaseOne()"); // Added function
        console.log("Slope.hack.score.reset()"); // Added function
        console.log("");
        console.log("%c // Ball Speed", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.ballSpeed.set(2)");
        console.log("Slope.hack.ballSpeed.reset()");
        console.log("Slope.hack.ballSpeed.double()");
        console.log("Slope.hack.ballSpeed.halve()");
        console.log("");
        console.log("%c // Super Jump", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.superJump.perform()");
        console.log("Slope.hack.superJump.setForce(300)");
        console.log("");
        console.log("%c // Teleport", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.teleport.forward(100)");
        console.log("Slope.hack.teleport.upward(50)");
        console.log("Slope.hack.teleport.to(0, 100, 0)");
        console.log("Slope.hack.teleport.toStart()");
        console.log("Slope.hack.teleport.savePosition('Cool Spot')");
        console.log("Slope.hack.teleport.listSaved()");
        console.log("Slope.hack.teleport.toSaved(0)");
        console.log("");
        console.log("%c // Gravity", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.gravity.toggle()");
        console.log("Slope.hack.gravity.enable()");
        console.log("Slope.hack.gravity.disable()");
        console.log("Slope.hack.gravity.increase(50)");
        console.log("Slope.hack.gravity.decrease(50)");
        console.log("Slope.hack.gravity.reset()");
        console.log("");
        console.log("%c // Fly Mode", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.fly.enable()");
        console.log("Slope.hack.fly.disable()");
        console.log("Slope.hack.fly.toggle()");
        console.log("Slope.hack.fly.setSpeed(10)");
        console.log("");
        console.log("%c // Utilities", "color: #ff5722; font-weight: bold;");
        console.log("Slope.util.resetGame()");
        console.log("Slope.util.triggerDeath()");
        console.log("Slope.util.getPos()");
        console.log("Slope.util.setPos(x, y, z)");
        console.log("Slope.util.searchFor('Slope')");
        console.log("Slope.util.searchFor16('Slope')");
        console.log("Slope.util.searchForFloat(10.0)");
        console.log("Slope.util.searchForInt32(123456)");
        console.log("Slope.util.searchForVar('score')");

        return true;
    }

    // Run the hack
    enableSlopeHacks();
})();
