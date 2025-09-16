(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/format.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDate": ()=>formatDate
});
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(date));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/like-icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LikeButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LikeButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "like-button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
            }, void 0, false, {
                fileName: "[project]/components/like-icon.js",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/like-icon.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/like-icon.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = LikeButton;
var _c;
__turbopack_context__.k.register(_c, "LikeButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:72e373 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f5f166cbf881f34a5ee27a39ec7c9ebc6d07c1ac0":"togglePostLike"},"actions/posts.js",""] */ __turbopack_context__.s({
    "togglePostLike": ()=>togglePostLike
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var togglePostLike = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f5f166cbf881f34a5ee27a39ec7c9ebc6d07c1ac0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "togglePostLike"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcG9zdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQge3N0b3JlUG9zdCwgdXBkYXRlUG9zdExpa2VTdGF0dXN9IGZyb20gXCJAL2xpYi9wb3N0c1wiO1xuaW1wb3J0IHtyZWRpcmVjdH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHt1cGxvYWRJbWFnZX0gZnJvbSBcIkAvbGliL2Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7cmV2YWxpZGF0ZVBhdGh9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKHByZXZTdGF0ZSwgZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcbiAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZm9ybURhdGEuZ2V0KCdjb250ZW50Jyk7XG5cbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdUaXRsZSBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKCFjb250ZW50IHx8IGNvbnRlbnQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlcnJvcnMucHVzaCgnQ29udGVudCBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKCFpbWFnZSB8fCBpbWFnZS5zaXplID09PSAwKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdJbWFnZSBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9ycyB9IDtcbiAgICB9XG5cbiAgICBsZXQgaW1hZ2VVcmw7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgIHRyeSB7XG4gICAgICAgIGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoaW1hZ2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2UgdXBsb2FkIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcblxuICAgIH1cblxuXG4gICAgYXdhaXQgc3RvcmVQb3N0KHtcbiAgICAgICAgaW1hZ2VVcmw6IGltYWdlVXJsLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHVzZXJJZDogMVxuICAgIH0pO1xuXG4gICAgcmVkaXJlY3QoJy9mZWVkJylcbiAgICByZXZhbGlkYXRlUGF0aCgnLycsICdsYXlvdXQnKVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlUG9zdExpa2UgPSBhc3luYyAocG9zdElkKSA9PiB7XG4gICAgYXdhaXQgdXBkYXRlUG9zdExpa2VTdGF0dXMocG9zdElkLCAyKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpXG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBK0NhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/posts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPosts": ()=>getPosts,
    "storePost": ()=>storePost,
    "updatePostLikeStatus": ()=>updatePostLikeStatus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/better-sqlite3/lib/index.js [app-client] (ecmascript)");
;
const db = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('posts.db');
function initDb() {
    db.exec("\n    CREATE TABLE IF NOT EXISTS users (\n      id INTEGER PRIMARY KEY, \n      first_name TEXT, \n      last_name TEXT,\n      email TEXT\n    )");
    db.exec("\n    CREATE TABLE IF NOT EXISTS posts (\n      id INTEGER PRIMARY KEY, \n      image_url TEXT NOT NULL,\n      title TEXT NOT NULL, \n      content TEXT NOT NULL, \n      created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n      user_id INTEGER, \n      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE\n    )");
    db.exec("\n    CREATE TABLE IF NOT EXISTS likes (\n      user_id INTEGER, \n      post_id INTEGER, \n      PRIMARY KEY(user_id, post_id),\n      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, \n      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE\n    )");
    // Creating two dummy users if they don't exist already
    const stmt = db.prepare('SELECT COUNT(*) AS count FROM users');
    if (stmt.get().count === 0) {
        db.exec("\n    INSERT INTO users (first_name, last_name, email)\n    VALUES ('John', 'Doe', 'john@example.com')\n  ");
        db.exec("\n    INSERT INTO users (first_name, last_name, email)\n    VALUES ('Max', 'Schwarz', 'max@example.com')\n  ");
    }
}
initDb();
async function getPosts(maxNumber) {
    let limitClause = '';
    if (maxNumber) {
        limitClause = 'LIMIT ?';
    }
    const stmt = db.prepare("\n    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked\n    FROM posts\n    INNER JOIN users ON posts.user_id = users.id\n    LEFT JOIN likes ON posts.id = likes.post_id\n    GROUP BY posts.id\n    ORDER BY createdAt DESC\n    ".concat(limitClause));
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    return maxNumber ? stmt.all(maxNumber) : stmt.all();
}
async function storePost(post) {
    const stmt = db.prepare("\n    INSERT INTO posts (image_url, title, content, user_id)\n    VALUES (?, ?, ?, ?)");
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    return stmt.run(post.imageUrl, post.title, post.content, post.userId);
}
async function updatePostLikeStatus(postId, userId) {
    const stmt = db.prepare("\n    SELECT COUNT(*) AS count\n    FROM likes\n    WHERE user_id = ? AND post_id = ?");
    const isLiked = stmt.get(userId, postId).count === 0;
    if (isLiked) {
        const stmt = db.prepare("\n      INSERT INTO likes (user_id, post_id)\n      VALUES (?, ?)");
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return stmt.run(userId, postId);
    } else {
        const stmt = db.prepare("\n      DELETE FROM likes\n      WHERE user_id = ? AND post_id = ?");
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return stmt.run(userId, postId);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/posts.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Posts,
    "generateMetadata": ()=>generateMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$like$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/like-icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$72e373__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:72e373 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$typescript$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/typescript/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const generateMetadata = async ()=>{
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosts"])();
    const count = posts.length;
    return {
        title: "All posts (".concat(count, ")"),
        description: 'See all posts from all users in one place'
    };
};
const imageLoader = (config)=>{
    const urlStart = config.src.split('/upload/')[0];
    const urlEnd = config.src.split('/upload/')[1];
    const transformation = "w_200,q_".concat(config.quality);
    return "".concat(urlStart, "/upload/").concat(transformation, "/").concat(urlEnd);
};
function Post(param) {
    let { post, action } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "post",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: post.image,
                    loader: imageLoader,
                    width: 140,
                    height: 100,
                    quality: 50,
                    alt: post.title
                }, void 0, false, {
                    fileName: "[project]/components/posts.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/posts.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Shared by ",
                                            post.userFirstName,
                                            " on",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: post.createdAt,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(post.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/components/posts.js",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/posts.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    action: action.bind(null, post.id),
                                    className: post.isLiked ? 'liked' : '',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$like$2d$icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/posts.js",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/posts.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/posts.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: post.content
                    }, void 0, false, {
                        fileName: "[project]/components/posts.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/posts.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/posts.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Post;
function Posts(param) {
    let { posts } = param;
    _s();
    const [optimisticPosts, updateOptimisticPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(posts, {
        "Posts.useOptimistic": (prevPosts, updatePostId)=>{
            const updatePostIndex = prevPosts.findIndex({
                "Posts.useOptimistic.updatePostIndex": (post)=>post.id === updatePostId
            }["Posts.useOptimistic.updatePostIndex"]);
            if (updatePostIndex === -1) {
                return prevPosts;
            }
            const updatePost = {
                ...prevPosts[updatePostIndex]
            };
            updatePost.likes = updatePost.likes + (updatePost.isLiked ? -1 : 1);
            updatePost.isLiked = !updatePost.isLiked;
            const newPosts = [
                ...prevPosts
            ];
            newPosts[updatePostIndex] = updatePost;
            console.log(1);
            setTimeout({
                "Posts.useOptimistic": ()=>console.log(2)
            }["Posts.useOptimistic"], 0);
            Promise.resolve().then({
                "Posts.useOptimistic": ()=>console.log(3)
            }["Posts.useOptimistic"]);
            console.log(4);
            return newPosts;
        }
    }["Posts.useOptimistic"]);
    if (!optimisticPosts || optimisticPosts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "There are no posts yet. Maybe start sharing some?"
        }, void 0, false, {
            fileName: "[project]/components/posts.js",
            lineNumber: 88,
            columnNumber: 12
        }, this);
    }
    const updatePost = async (postId)=>{
        updateOptimisticPosts(postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$72e373__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["togglePostLike"])(postId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "posts",
        children: optimisticPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Post, {
                    post: post,
                    action: updatePost
                }, void 0, false, {
                    fileName: "[project]/components/posts.js",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, post.id, false, {
                fileName: "[project]/components/posts.js",
                lineNumber: 99,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/posts.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Posts, "FiXwFlDzaHE2Vy0pIxxnLM9cNs0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"]
    ];
});
_c1 = Posts;
var _c, _c1;
__turbopack_context__.k.register(_c, "Post");
__turbopack_context__.k.register(_c1, "Posts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/counter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Counter = ()=>{
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const clickHandler = ()=>{
        setCount((prevState)=>prevState + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: count
            }, void 0, false, {
                fileName: "[project]/components/counter.js",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: clickHandler,
                children: "Increment"
            }, void 0, false, {
                fileName: "[project]/components/counter.js",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Counter, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = Counter;
const __TURBOPACK__default__export__ = Counter;
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4b86015a._.js.map