javascript: (function() {
    function enableSlopeHacks() {

        if (!window.gameInstance || !window.gameInstance.Module) {
            alert("Game instance not found or not initialized! Make sure you're on the Slope game page.");
            return false;
        }

        if (typeof Swal === "undefined") {
            let s = document.createElement("script");
            s.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
            s.onload = () => console.log("Swal loaded!");
            document.head.appendChild(s);
        }

        try {
            window.fsms = [29016368, 29016064, 29224512, 29224208, 29223904, 29223600, 29222384, 29222080, 30522336, 30522032, 29016672, 29016976];
            window.morefsms = [33402432, 33402128, 33401824, 33401520, 33401216, 33400912, 33400608, 33400304, 33400000, 33399696, 33399392, 33399088, 33398784, 33545792, 33545488, 33545184, 33692640];
            window.prefabs = [33308736, 25272688, 25272528, 25272624, 25272640, 25272544, 25272560, 25272576, 25272880, 25272896, 25272816, 25272832, 25272848, 25272592, 25272608, 25272656, 25272928, 25272912, 37954832, 25272736, 25272720, 25272864, 25272480, 25272768, 25272784, 25272496, 25272704, 25272800, 25272752, 25272464, 25272944, 25272976];
            window.readGameObjects = true;
            window.keys = [];
            window.running = true;
            window.nowPatch = false;
        } catch (e) {
            console.error("Error initializing variables:", e);
        }

        const BallRb = 41991744;
        const zForce = 0x01cd5c98;
        const yForce = 0x01cd5cb8;
        const SteerForceRight = 0x01d46af8;
        const SteerForceLeft = 0x01d46b18;
        const scoreAddress = 7674510 * 4;
        const GameObjectBall = 32936032;
        const FsmOwnerBall = 29249256;
        const SphereGameObject = 25273360;
        const ScoreGUIText = 34322048;
        const PlayMakerFSMType = 25281808;
        const TransformType = 33380392;
        const SpawnPoolsDict = 42162888;
        const SpawnPool = 25323200;
        const RigidbodyType = 42161928;
        const maxRepeats = 30562168;
        const BlockLength = 30562360;
        const sceneHandle = 4294967234;

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

        function read32(loc) {
            try {
                return new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 4];
            } catch (e) {
                console.error("Error in read32:", e, loc);
                return 0;
            }
        }

        function set32(loc, val) {
            try {
                new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 4] = val;
            } catch (e) {
                console.error("Error in set32:", e, loc, val);
            }
        }

        function readFloat32(loc) {
            try {
                return new Float32Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 4];
            } catch (e) {
                console.error("Error in readFloat32:", e, loc);
                return 0;
            }
        }

        function setFloat32(loc, val) {
            try {
                new Float32Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 4] = val;
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
                return new Uint16Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 2];
            } catch (e) {
                console.error("Error in read16:", e, loc);
                return 0;
            }
        }

        function set16(loc, val) {
            try {
                new Uint16Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 2] = val;
            } catch (e) {
                console.error("Error in set16:", e, loc, val);
            }
        }

        function readString(ptr) {
            try {
                let str = "";
                const len = read32(ptr + 0x8);
                if (len < 0 || len > 1e3) {
                    console.log("Not a string!");
                    return;
                }
                for (var i = 0; i < len * 2; i += 2) {
                    str += String.fromCharCode(read16(ptr + 0xC + i));
                }
                return str;
            } catch (e) {
                console.error("Error in readString:", e, ptr);
                return "";
            }
        }

        function writeString(ptr, str) {
            try {
                set32(ptr + 0x8, str.length);
                for (let i = 0; i < str.length * 2; i += 2) {
                    set16(ptr + 0xC + i, str.charCodeAt(i / 2));
                }
            } catch (e) {
                console.error("Error in writeString:", e, ptr, str);
            }
        }

        function readChar(ptr) {
            try {
                let i = 0;
                let out = "";
                while (read8(ptr + i) != 0) {
                    out += String.fromCharCode(read8(ptr + i));
                    i++;
                    if (i > 100) {
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
                let ptr = window.gameInstance.Module._malloc(0xC + value.length * 2);
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

        function safeRead32(loc) {
            try {
                if (!window.gameInstance || !window.gameInstance.Module || !window.gameInstance.Module.wasmMemory) {
                    return 0;
                }
                return new Uint32Array(window.gameInstance.Module.wasmMemory.buffer)[loc / 4] || 0;
            } catch (e) {
                console.error("Error in safeRead32:", e);
                return 0;
            }
        }

        function readArr(ptr, ind) {
            try {
                return read32(ptr + 0x10 + (ind * 4));
            } catch (e) {
                console.error("Error in readArr:", e, ptr, ind);
                return 0;
            }
        }

        function setArr(ptr, ind, value) {
            try {
                return set32(ptr + 0x10 + (ind * 4), value);
            } catch (e) {
                console.error("Error in setArr:", e, ptr, ind, value);
            }
        }

        function readFullArr(ptr) {
            try {
                let i = 0;
                let arr = [];
                while (readArr(ptr, i) != 0) {
                    arr.push(readArr(ptr, i));
                    i++;
                    if (i > 500) {
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
                while (i < 500) {
                    const value = safeRead32(ptr + 0x10 + (i * 4));
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
                    y: readFloat32(ptr + 0x4),
                    z: readFloat32(ptr + 0x8)
                };
            } catch (e) {
                console.error("Error in readVec3:", e, ptr);
                return {
                    x: 0,
                    y: 0,
                    z: 0
                };
            }
        }

        function readQuat(ptr) {
            try {
                return {
                    x: readFloat32(ptr),
                    y: readFloat32(ptr + 0x4),
                    z: readFloat32(ptr + 0x8),
                    w: readFloat32(ptr + 0xC)
                };
            } catch (e) {
                console.error("Error in readQuat:", e, ptr);
                return {
                    x: 0,
                    y: 0,
                    z: 0,
                    w: 1
                };
            }
        }

        function setQuat(ptr, vec) {
            try {
                if (vec.x == undefined || vec.y == undefined || vec.z == undefined || vec.w == undefined) {
                    throw "Quaternion must have an x, y, z, and w!";
                }
                setFloat32(ptr, vec.x);
                setFloat32(ptr + 0x4, vec.y);
                setFloat32(ptr + 0x8, vec.z);
                setFloat32(ptr + 0xC, vec.w);
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
                    y: readFloat32(ptr + 4),
                    z: readFloat32(ptr + 8)
                };
                window.gameInstance.Module._free(ptr);
                return ret;
            } catch (e) {
                console.error("Error in getPos:", e);
                return {
                    x: 0,
                    y: 0,
                    z: 0
                };
            }
        }

        function setPos(x, y, z) {
            try {
                let ptr = window.gameInstance.Module._malloc(12);
                setFloat32(ptr, x);
                setFloat32(ptr + 0x4, y);
                setFloat32(ptr + 0x8, z);
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
                setFloat32(vec3 + 4, fvec.y);
                setFloat32(vec3 + 8, fvec.z);
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
                setFloat32(vec3 + 4, fvec.y);
                setFloat32(vec3 + 8, fvec.z);
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

        function get_PlayMakerFSM(gameObject, fsmName = "FSM") {
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
                return {
                    name: "",
                    ptr: ptr
                };
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

        function readFsmVariables(ptr) {
            try {
                if (!ptr) return {
                    floatVars: [],
                    intVars: [],
                    boolVars: [],
                    stringVars: []
                };

                return {
                    floatVars: safeReadFullArr(safeRead32(ptr + 0x8)).map(e => readNamedVariable(e)),
                    intVars: safeReadFullArr(safeRead32(ptr + 0xC)).map(e => readNamedVariable(e)),
                    boolVars: safeReadFullArr(safeRead32(ptr + 0x10)).map(e => readNamedVariable(e)),
                    stringVars: safeReadFullArr(safeRead32(ptr + 0x14)).map(e => readNamedVariable(e))
                };
            } catch (e) {
                console.error("Error in readFsmVariables:", e);
                return {
                    floatVars: [],
                    intVars: [],
                    boolVars: [],
                    stringVars: []
                };
            }
        }

        function readFsmEvent(ptr) {
            try {
                return {
                    name: readPStr(ptr + 0x8),
                    isSystemEvent: read8(ptr + 0xC),
                    isGlobal: read8(ptr + 0xD),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmEvent:", e, ptr);
                return {
                    name: "",
                    isSystemEvent: 0,
                    isGlobal: 0,
                    ptr: ptr
                };
            }
        }

        function readFsmStateAction(ptr) {
            try {
                return {
                    name: readPStr(ptr + 0x8),
                    type: readClassName(ptr),
                    enabled: read8(ptr + 0xC),
                    isOpen: read8(ptr + 0xD),
                    active: read8(ptr + 0xE),
                    finished: read8(ptr + 0xF),
                    autoName: read8(ptr + 0x10),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmStateAction:", e, ptr);
                return {
                    name: "",
                    type: "",
                    enabled: 0,
                    isOpen: 0,
                    active: 0,
                    finished: 0,
                    autoName: 0,
                    ptr: ptr
                };
            }
        }

        function readFsmTransitions(ptr) {
            try {
                return {
                    toState: readPStr(ptr + 0xC),
                    fsmEvent: readFsmEvent(read32(ptr + 0x8)),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmTransitions:", e, ptr);
                return {
                    toState: "",
                    fsmEvent: null,
                    ptr: ptr
                };
            }
        }

        function readClassName(il2cppobjectptr) {
            try {
                return readChar(read32(read32(il2cppobjectptr) + 0x8));
            } catch (e) {
                console.error("Error in readClassName:", e, il2cppobjectptr);
                return "";
            }
        }

        function readClassNamespace(il2cppobjectptr) {
            try {
                return readChar(read32(read32(il2cppobjectptr) + 0xc));
            } catch (e) {
                console.error("Error in readClassNamespace:", e, il2cppobjectptr);
                return "";
            }
        }

        function readNamedVariable(ptr) {
            try {
                return {
                    useVariable: read8(ptr + 0x8),
                    name: readPStr(ptr + 0xC),
                    tooltip: readPStr(ptr + 0x10),
                    showInInspector: read8(ptr + 0x14),
                    networkSync: read8(ptr + 0x15),
                    ptr
                };
            } catch (e) {
                console.error("Error in readNamedVariable:", e, ptr);
                return {
                    useVariable: 0,
                    name: "",
                    tooltip: "",
                    showInInspector: 0,
                    networkSync: 0,
                    ptr: ptr
                };
            }
        }

        function readFsmState(ptr) {
            try {
                return {
                    name: readPStr(ptr + 0x18),
                    activeActionIndex: read32(ptr + 0x10),
                    activeAction: (read32(ptr + 0xC) !== 0) ? readFsmStateAction(read32(ptr + 0xC)) : null,
                    desc: readPStr(ptr + 0x1C),
                    active: read8(ptr + 0x8),
                    finished: read8(ptr + 0x9),
                    actions: safeReadFullArr(read32(ptr + 0x3C)).map(e => readFsmStateAction(e)),
                    transitions: safeReadFullArr(read32(ptr + 0x38)).map(e => readFsmTransitions(e)),
                    ptr
                };
            } catch (e) {
                console.error("Error in readFsmState:", e, ptr);
                return {
                    name: "",
                    activeActionIndex: 0,
                    activeAction: null,
                    desc: "",
                    active: 0,
                    finished: 0,
                    actions: [],
                    transitions: [],
                    ptr: ptr
                };
            }
        }

        function readFsm(fsm) {
            try {
                if (!fsm) return {
                    name: "Unknown",
                    events: [],
                    states: [],
                    variables: {
                        floatVars: [],
                        intVars: [],
                        boolVars: [],
                        stringVars: []
                    },
                    globalTransitions: [],
                    ptr: 0
                };

                return {
                    name: readString(read32(fsm + 0x18)) || "Unknown",
                    GameObject: readGameObjects ? readGameObject(getFsmGameObject(fsm)) : null,
                    events: safeReadFullArr(read32(fsm + 0x24)).map(e => readFsmEvent(e)),
                    startState: readString(read32(fsm + 0x1C)) || "",
                    dataVersion: read32(fsm + 0xC) || 0,
                    states: safeReadFullArr(read32(fsm + 0x20)).map(e => readFsmState(e)),
                    variables: readFsmVariables(read32(fsm + 0x2C)),
                    globalTransitions: safeReadFullArr(read32(fsm + 0x28)).map(e => readFsmTransitions(e)),
                    PlayMakerFSM: window.gameInstance.Module.dynCall_iii(3117, fsm),
                    ptr: fsm
                };
            } catch (e) {
                console.error("Error in readFsm:", e);
                return {
                    name: "Error",
                    events: [],
                    states: [],
                    variables: {
                        floatVars: [],
                        intVars: [],
                        boolVars: [],
                        stringVars: []
                    },
                    globalTransitions: [],
                    ptr: 0
                };
            }
        }

        function readList(ptr) {
            try {
                let list = [];
                let len = window.gameInstance.Module.dynCall_iii(4408, ptr);
                for (var i = 0; i < len; i++) {
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
                [30247888, 29188840, 29220272, 30703504, 29163616, 25388496].forEach(e => set32(read32(e + 0xC) + 0x8, 0));
                window.gameInstance.Module.dynCall_vii(7174, 37783424);
                Swal.fire({
                    toast: true,
                    position: 'bottom',
                    icon: 'success',
                    title: 'No Death Activated! Reload to undo! (Score will be broken if not run on home screen!)',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true
                });

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
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30725992);
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30632936);
                window.gameInstance.Module.dynCall_viii(2350, 29222080, 30726232);
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30726088);
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30725992);
                window.gameInstance.Module.dynCall_viii(2350, 29223600, 30248008);
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
                setFloat32(posp, pos.x);
                setFloat32(posp + 0x4, pos.y);
                setFloat32(posp + 0x8, pos.z);
                let rotp = window.gameInstance.Module._malloc(16);
                setFloat32(rotp, rot.x);
                setFloat32(rotp + 0x4, rot.y);
                setFloat32(rotp + 0x8, rot.z);
                setFloat32(rotp + 0xc, rot.w);
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
                return [0, 0, 0, 0];
            }
        }

        function setRandState(val) {
            try {
                if (val.length !== 4) {
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
                return {
                    x: 0,
                    y: 0,
                    z: 0
                };
            }
        }

        function searchFor(str) {
            try {
                let buffer = new Uint8Array(window.gameInstance.Module.wasmMemory.buffer);
                for (var i = 0; i < buffer.length; i += 2048) {
                    const buf = [...buffer.subarray(i, i + 2048)].map(e => String.fromCharCode(e)).join("");
                    if (buf.includes(str)) {
                        console.log(i + buf.indexOf(str));
                    }
                }
            } catch (e) {
                console.error("Error in searchFor:", e, str);
            }
        }

        function read(loc, len) {
            try {
                return [...new Uint8Array(window.gameInstance.Module.wasmMemory.buffer).subarray(loc, loc + len)].map(e => String.fromCharCode(e)).join("");
            } catch (e) {
                console.error("Error in read:", e, loc, len);
                return "";
            }
        }

        function searchFor16(str) {
            try {
                str = str.split("").map(e => e + "\x00").join("");
                let buffer = new Uint8Array(window.gameInstance.Module.wasmMemory.buffer);
                for (var i = 0; i < 55000000; i += 2048) {
                    const buf = [...buffer.subarray(i, i + 2048)].map(e => String.fromCharCode(e)).join("");
                    if (buf.includes(str)) {
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
                for (var i = 0; i < 55000000; i += 2048) {
                    const buf = [...buffer.subarray(i, i + 2048)].map(e => String.fromCharCode(e)).join("");
                    if (buf.includes(str)) {
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
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
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
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
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
                    if (ptrs.length > 1) {
                        throw "more than 1 pointer found!";
                    }
                    return ptrs[0] - 0xC;
                });
                return possiblities.filter(e => {
                    if (read8(e + 0x8) > 1) {
                        return;
                    }
                    if (read8(e + 0x14) > 1) {
                        return;
                    }
                    if (read8(e + 0x15) > 1) {
                        return;
                    }
                    return !0;
                }).map(e => e + 0x18);
            } catch (e) {
                console.error("Error in searchForVar:", e, name);
                return [];
            }
        }

        const originalState = {

            deathAddresses: [30247888, 29188840, 29220272, 30703504, 29163616, 25388496],
            deathValues: [],

            zForceValue: readFloat32(zForce),
            yForceValue: readFloat32(yForce),
            steerRightValue: readFloat32(SteerForceRight),
            steerLeftValue: readFloat32(SteerForceLeft),

            scoreValue: read32(scoreAddress),

            startPosition: getPos()
        };

        try {
            originalState.deathValues = originalState.deathAddresses.map(addr =>
                read32(read32(addr + 0xC) + 0x8)
            );
        } catch (e) {
            console.error("Error storing original death values:", e);
            originalState.deathValues = [0, 0, 0, 0, 0, 0];
        }

        window.Slope = {

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

                searchFor,
                read,
                searchFor16,
                searchFor16arr,
                searchForFloat,
                searchForInt32,
                searchForVar
            },

            originalState,

            hack: {

                noDeath: {
                    enable: function() {
                        try {
                            originalState.deathAddresses.forEach(addr => {
                                set32(read32(addr + 0xC) + 0x8, 0);
                            });
                            console.log("No Death mode enabled!");
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: "No Death mode enabled!",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
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
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: "No Death mode disabled!",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error disabling No Death:", e);
                            return false;
                        }
                    },

                    toggle: function() {
                        try {

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

                            const firstValue = read32(read32(originalState.deathAddresses[0] + 0xC) + 0x8);
                            return firstValue === 0;
                        } catch (e) {
                            console.error("Error checking No Death enabled:", e);
                            return false;
                        }
                    }
                },

                score: {
                    get: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            const currentScore = view[scoreAddress / 4];

                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'warning',
                                title: `Current Score: ${currentScore}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });

                            return currentScore;
                        } catch (e) {
                            console.error("Error getting score:", e);
                            return 0;
                        }
                    },

                    set: function(value) {
                        try {

                            if (typeof value !== 'number') {
                                Swal.fire({
                                    title: 'Set Score',
                                    input: 'number',
                                    inputLabel: 'Enter the score you want to set:',
                                    inputAttributes: {
                                        min: 0
                                    },
                                    inputValue: 0,
                                    showCancelButton: true,
                                    confirmButtonText: 'Set Score',
                                    preConfirm: (inputValue) => {
                                        if (isNaN(inputValue) || inputValue < 0) {
                                            Swal.showValidationMessage('Please enter a valid non-negative number');
                                            return false;
                                        }
                                        return Number(inputValue);
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                                        view[scoreAddress / 4] = result.value;
                                        Swal.fire({
                                            toast: true,
                                            position: 'bottom',
                                            icon: 'success',
                                            title: `Score set to: ${result.value}`,
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true,
                                        });
                                        console.log(`Score set to: ${result.value}`);
                                    }
                                });
                                return true;
                            }

                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = value;
                            console.log(`Score set to: ${value}`);
                            return true;

                        } catch (e) {
                            console.error("Error setting score:", e, value);
                            return false;
                        }
                    },

                    setMax: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = 2147483647;
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: `Score set to maximum: ${view[scoreAddress / 4]}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error setting max score:", e);
                            return false;
                        }
                    },

                    double: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] *= 2;
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Score doubled! New score: ${view[scoreAddress / 4]}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error doubling score:", e);
                            return false;
                        }
                    },

                    decreaseOne: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4]--;
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Decreased score by 1. New score: ${view[scoreAddress / 4]}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error decreasing score by 1:", e);
                            return false;
                        }
                    },

                    increaseOne: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4]++;
                            console.log(`Increased score by 1. New score: ${view[scoreAddress / 4]}`);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Increased score by 1. New score: ${view[scoreAddress / 4]}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error increasing score by 1:", e);
                            return false;
                        }
                    },

                    reset: function() {
                        try {
                            const view = new Uint32Array(window.gameInstance.Module.wasmMemory.buffer);
                            view[scoreAddress / 4] = 0;
                            console.log("Score reset to 0");
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: "Score reset to 0",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error resetting score:", e);
                            return false;
                        }
                    }
                },

                ballSpeed: {
                    increaseAmount: 25,

                    get: function() {
                        return readFloat32(zForce);
                    },

                    set: function(value) {
                        try {
                            if (typeof value !== 'number' || value <= 0) {
                                console.error("Forward speed must be positive");
                                return false;
                            }

                            setFloat32(zForce, value);
                            console.log(`Set forward speed to ${value.toFixed(1)}`);
                            return true;
                        } catch (e) {
                            console.error("Error setting forward speed:", e);
                            return false;
                        }
                    },
                    reset: function() {
                        this.set(0);

                        Swal.fire({
                            toast: true,
                            position: 'bottom',
                            icon: 'warning',
                            title: `Speed reset to 0`,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                        });

                        console.log("Ball speed reset to 0");
                    },

                    increase: function() {
                        try {
                            const currentSpeed = this.get();
                            const newSpeed = currentSpeed + this.increaseAmount;
                            this.set(newSpeed);

                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Increased speed by ${this.increaseAmount}. Current speed: ${newSpeed.toFixed(1)}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });

                            return true;
                        } catch (e) {
                            console.error("Error increasing speed:", e);
                            return false;
                        }
                    },

                    decrease: function() {
                        try {
                            const currentSpeed = this.get();
                            const newSpeed = currentSpeed - this.increaseAmount;
                            if (newSpeed <= 0) {
                                console.error("Speed must be positive");
                                return false;
                            }

                            this.set(newSpeed);

                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'info',
                                title: `Decreased speed by ${this.increaseAmount}. Current speed: ${newSpeed.toFixed(1)}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });

                            return true;
                        } catch (e) {
                            console.error("Error decreasing speed:", e);
                            return false;
                        }
                    }
                },

                superJump: {
                    _jumpForce: 50,

                    setForce: function() {
                        Swal.fire({
                            title: 'Set Jump Force',
                            input: 'number',
                            inputAttributes: {
                                min: 0.1,
                                step: 0.1
                            },
                            inputLabel: 'Enter the jump force you want:',
                            inputValidator: (value) => {
                                if (!value || isNaN(value) || parseFloat(value) <= 0) {
                                    return 'Please enter a positive number!';
                                }
                            },
                            showCancelButton: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                try {
                                    const force = parseFloat(result.value);
                                    this._jumpForce = force;
                                    Swal.fire({
                                        toast: true,
                                        position: 'top-end',
                                        icon: 'success',
                                        title: `Jump force set to ${force}`,
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        background: '#9b59b6',
                                        color: '#fff'
                                    });
                                } catch (e) {
                                    console.error("Error setting jump force:", e, result.value);
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Error setting jump force'
                                    });
                                }
                            }
                        });
                    },

                    perform: function() {
                        try {
                            const vel = GetVelocity();

                            AddForce({
                                x: 0,
                                y: this._jumpForce,
                                z: vel.z > 0 ? vel.z * 0.5 : 50
                            }, 1);

                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Jump performed with force: ${this._jumpForce}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            });
                            return true;
                        } catch (e) {
                            console.error("Error performing super jump:", e);
                            return false;
                        }
                    }
                },

                teleport: {
                    _savedPositions: [],

                    to: async function() {
                        try {
                            const {
                                value: coords
                            } = await Swal.fire({
                                title: 'Enter coordinates (x,y,z)',
                                input: 'text',
                                inputPlaceholder: 'e.g. 0,10,50',
                                showCancelButton: true,
                            });

                            if (!coords) return false;

                            const parts = coords.split(',').map(Number);
                            if (parts.length !== 3 || parts.some(isNaN)) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Invalid coordinates!'
                                });
                                return false;
                            }

                            setPos(parts[0], parts[1], parts[2]);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Teleported to (${parts[0]}, ${parts[1]}, ${parts[2]})`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            console.error("Error teleporting to position:", e);
                            return false;
                        }
                    },

                    forward: async function() {
                        try {
                            const pos = getPos();
                            const {
                                value: distance
                            } = await Swal.fire({
                                title: 'Enter distance to move forward',
                                input: 'number',
                                inputValue: 100,
                                showCancelButton: true,
                            });

                            if (distance === undefined || distance === null) return false;

                            setPos(pos.x, pos.y, pos.z + Number(distance));
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Teleported forward ${distance} units`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            console.error("Error teleporting forward:", e);
                            return false;
                        }
                    },

                    upward: async function() {
                        try {
                            const pos = getPos();
                            const {
                                value: distance
                            } = await Swal.fire({
                                title: 'Enter distance to move upward',
                                input: 'number',
                                inputValue: 50,
                                showCancelButton: true,
                            });

                            if (distance === undefined || distance === null) return false;

                            setPos(pos.x, pos.y + Number(distance), pos.z);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Teleported upward ${distance} units`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            console.error("Error teleporting upward:", e);
                            return false;
                        }
                    },

                    toStart: function() {
                        try {
                            setPos(0, 10, 0);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: 'Teleported to start position',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            console.error("Error teleporting to start:", e);
                            return false;
                        }
                    },

                    savePosition: function(name = "") {
                        try {
                            const pos = getPos();

                            Swal.fire({
                                title: 'Name Your Position',
                                input: 'text',
                                inputLabel: 'Enter a name for this position',
                                inputValue: name || `Position ${this._savedPositions.length + 1}`,
                                showCancelButton: true,
                                confirmButtonText: 'Save',
                                cancelButtonText: 'Cancel',
                                inputValidator: (value) => {
                                    if (!value) {
                                        return 'Please enter a name!';
                                    }
                                }
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    const posName = result.value;

                                    this._savedPositions.push({
                                        name: posName,
                                        x: pos.x,
                                        y: pos.y,
                                        z: pos.z
                                    });

                                    Swal.fire({
                                        title: "Position Saved!",
                                        text: `Saved current position as "${posName}": (X: ${pos.x.toFixed(1)}, Y: ${pos.y.toFixed(1)}, Z: ${pos.z.toFixed(1)})`,
                                        icon: "success",
                                        confirmButtonText: "OK"
                                    });

                                    console.log(`Saved current position as "${posName}": (${pos.x.toFixed(1)}, ${pos.y.toFixed(1)}, ${pos.z.toFixed(1)})`);
                                }
                            });

                            return this._savedPositions.length - 1;
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
                                Swal.fire({
                                    title: "Saved Positions",
                                    text: "No saved positions",
                                    icon: "info",
                                    timer: 3000,
                                    showConfirmButton: false
                                });
                                return [];
                            }

                            let htmlList = this._savedPositions.map((pos, index) => {
                                return `
                <div style="display:flex; align-items:center; margin-bottom:8px;">
                    <button 
                        style="
                            background-color: #4CAF50; 
                            color: white; 
                            border: none; 
                            padding: 5px 10px; 
                            border-radius: 5px; 
                            cursor: pointer;
                            font-weight: bold;
                            transition: background 0.2s;
                        " 
                        onmouseover="this.style.backgroundColor='#45a049'" 
                        onmouseout="this.style.backgroundColor='#4CAF50'" 
                        onclick="Slope.hack.teleport.toSaved(${index}); Swal.close();">
                        Teleport
                    </button>
                    <span style="margin-left: 10px; font-family: Arial, sans-serif;">
                        <b>${index}:</b> "${pos.name}" - (X: ${pos.x.toFixed(1)}, Y: ${pos.y.toFixed(1)}, Z: ${pos.z.toFixed(1)})
                    </span>
                </div>
            `;
                            }).join("");

                            Swal.fire({
                                title: "Saved Positions",
                                html: htmlList,
                                width: 550,
                                showConfirmButton: true,
                                confirmButtonText: "OK"
                            });

                            return this._savedPositions;
                        } catch (e) {
                            console.error("Error listing saved positions:", e);
                            return [];
                        }
                    }
                },

                gravity: {
                    toggle: function() {
                        try {
                            const useGravity = !!this.isEnabled();
                            set_UseGravity(BallRb, !useGravity);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Gravity ${!useGravity ? 'enabled' : 'disabled'}`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'error',
                                title: 'Error toggling gravity',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return false;
                        }
                    },

                    increase: function() {
                        Swal.fire({
                            title: 'Increase Gravity',
                            input: 'number',
                            inputLabel: 'Enter amount to increase gravity by',
                            inputAttributes: {
                                min: 0,
                                step: 1
                            },
                            showCancelButton: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const amount = parseFloat(result.value);
                                if (!isNaN(amount) && amount > 0) {
                                    setFloat32(yForce, readFloat32(yForce) - amount);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom',
                                        icon: 'success',
                                        title: `Gravity increased by ${amount}`,
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Invalid amount',
                                        text: 'Please enter a positive number'
                                    });
                                }
                            }
                        });
                    },

                    decrease: function() {
                        Swal.fire({
                            title: 'Decrease Gravity',
                            input: 'number',
                            inputLabel: 'Enter amount to decrease gravity by',
                            inputAttributes: {
                                min: 0,
                                step: 1
                            },
                            showCancelButton: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const amount = parseFloat(result.value);
                                if (!isNaN(amount) && amount > 0) {
                                    setFloat32(yForce, readFloat32(yForce) + amount);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom',
                                        icon: 'success',
                                        title: `Gravity decreased by ${amount}`,
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Invalid amount',
                                        text: 'Please enter a positive number'
                                    });
                                }
                            }
                        });
                    },

                    set: function() {
                        Swal.fire({
                            title: 'Set Gravity',
                            input: 'number',
                            inputLabel: 'Enter the gravity value:',
                            inputAttributes: {
                                min: 0,
                                step: 1
                            },
                            showCancelButton: true,
                            confirmButtonText: 'Set',
                            cancelButtonText: 'Cancel'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const value = parseFloat(result.value);
                                if (isNaN(value)) {
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom',
                                        icon: 'error',
                                        title: 'Invalid number',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                    return;
                                }
                                try {
                                    setFloat32(yForce, value);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom',
                                        icon: 'success',
                                        title: `Gravity set to ${value}`,
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                } catch (e) {
                                    console.error("Error setting gravity:", e);
                                    Swal.fire({
                                        toast: true,
                                        position: 'bottom',
                                        icon: 'error',
                                        title: 'Error setting gravity',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                }
                            }
                        });
                    },

                    reset: function() {
                        try {
                            setFloat32(yForce, originalState.yForceValue);
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: `Gravity reset to default (${originalState.yForceValue})`,
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return true;
                        } catch (e) {
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'error',
                                title: 'Error resetting gravity',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });
                            return false;
                        }
                    }
                },

                fly: {
                    _enabled: false,
                    _flyInterval: null,
                    _speed: 0.7,
                    _keys: {},

                    enable: function() {
                        try {
                            if (this._enabled) return true;

                            set_UseGravity(BallRb, false);

                            this._keys = {};

                            this._handleKeyDown = (e) => {
                                this._keys[e.code] = true;
                            };

                            this._handleKeyUp = (e) => {
                                this._keys[e.code] = false;
                            };

                            document.addEventListener('keydown', this._handleKeyDown);
                            document.addEventListener('keyup', this._handleKeyUp);

                            this._flyInterval = setInterval(() => {
                                if (!this._enabled) return;

                                const pos = getPos();

                                let moveX = 0,
                                    moveY = 0,
                                    moveZ = 0;

                                if (this._keys['KeyW']) moveZ += this._speed;
                                if (this._keys['KeyS']) moveZ -= this._speed;
                                if (this._keys['KeyA']) moveX -= this._speed;
                                if (this._keys['KeyD']) moveX += this._speed;
                                if (this._keys['Space']) moveY += this._speed;
                                if (this._keys['ShiftLeft'] || this._keys['ShiftRight']) moveY -= this._speed;

                                setPos(pos.x + moveX, pos.y + moveY, pos.z + moveZ);

                                SetVelocity({
                                    x: 0,
                                    y: 0,
                                    z: 0
                                });

                            }, 16);

                            this._enabled = true;
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'success',
                                title: "Fly mode enabled! Use WASD to move, SPACE for up, SHIFT for down",
                                showConfirmButton: false,
                                timer: 4000,
                                timerProgressBar: true,
                            });

                            return true;
                        } catch (e) {
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'error',
                                title: `Error enabling fly mode: ${e}`,
                                showConfirmButton: false,
                                timer: 4000,
                                timerProgressBar: true
                            });
                            return false;
                        }
                    },

                    disable: function() {
                        try {
                            if (!this._enabled) return true;

                            if (this._flyInterval) {
                                clearInterval(this._flyInterval);
                                this._flyInterval = null;
                            }

                            if (this._handleKeyDown)
                                document.removeEventListener('keydown', this._handleKeyDown);
                            if (this._handleKeyUp)
                                document.removeEventListener('keyup', this._handleKeyUp);

                            set_UseGravity(BallRb, true);

                            this._enabled = false;
                            Swal.fire({
                                toast: true,
                                position: 'bottom',
                                icon: 'warning',
                                title: 'Fly mode disabled',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });

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

        function triggerDeath() {
            try {

                const firstValue = read32(read32(originalState.deathAddresses[0] + 0xC) + 0x8);
                const godmodeEnabled = (firstValue === 0);

                if (godmodeEnabled) {
                    console.log("Triggering death with godmode: temporarily disabling godmode");

                    originalState.deathAddresses.forEach((addr, index) => {
                        set32(read32(addr + 0xC) + 0x8, originalState.deathValues[index]);
                    });

                    window.gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
                    console.log("Death triggered with godmode temporarily disabled");

                    originalState.deathAddresses.forEach(addr => {
                        set32(read32(addr + 0xC) + 0x8, 0);
                    });
                    console.log("Godmode re-enabled after death");
                } else {

                    window.gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
                    console.log("Death triggered via direct call");
                }
            } catch (e) {
                console.error("Error in triggerDeath:", e);
            }
        }

        window.Slope.util.triggerDeath = triggerDeath;

        console.log("Godmode (No Death) is disabled by default");

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
        console.log("Slope.hack.score.set()");
        console.log("Slope.hack.score.setMax()");
        console.log("Slope.hack.score.double()");
        console.log("Slope.hack.score.decreaseOne()");
        console.log("Slope.hack.score.increaseOne()");
        console.log("Slope.hack.score.reset()");
        console.log("");
        console.log("%c // Ball Speed", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.ballSpeed.set(value)");
        console.log("Slope.hack.ballSpeed.reset()");
        console.log("Slope.hack.ballSpeed.get()");
        console.log("Slope.hack.ballSpeed.increase()");
        console.log("Slope.hack.ballSpeed.decrease()");
        console.log("");
        console.log("%c // Super Jump", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.superJump.perform()");
        console.log("Slope.hack.superJump.setForce()");
        console.log("");
        console.log("%c // Teleport", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.teleport.forward()");
        console.log("Slope.hack.teleport.upward()");
        console.log("Slope.hack.teleport.to()");
        console.log("Slope.hack.teleport.toStart()");
        console.log("Slope.hack.teleport.savePosition()");
        console.log("Slope.hack.teleport.listSaved()");
        console.log("Slope.hack.teleport.toSaved()");
        console.log("");
        console.log("%c // Gravity", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.gravity.toggle()");
        console.log("Slope.hack.gravity.increase()");
        console.log("Slope.hack.gravity.decrease()");
        console.log("Slope.hack.gravity.set()");
        console.log("Slope.hack.gravity.reset()");
        console.log("");
        console.log("%c // Fly Mode", "color: #ff5722; font-weight: bold;");
        console.log("Slope.hack.fly.enable()");
        console.log("Slope.hack.fly.disable()");
        console.log("Slope.hack.fly.toggle()");
        console.log("Slope.hack.fly.setSpeed()");
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

    enableSlopeHacks();
})();
