module.exports = {

"[project]/lib/format.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatDate": ()=>formatDate
});
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(date));
}
}),
"[project]/components/like-icon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LikeButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LikeButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "like-button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/actions/data:72e373 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f5f166cbf881f34a5ee27a39ec7c9ebc6d07c1ac0":"togglePostLike"},"actions/posts.js",""] */ __turbopack_context__.s({
    "togglePostLike": ()=>togglePostLike
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var togglePostLike = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("7f5f166cbf881f34a5ee27a39ec7c9ebc6d07c1ac0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "togglePostLike"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcG9zdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQge3N0b3JlUG9zdCwgdXBkYXRlUG9zdExpa2VTdGF0dXN9IGZyb20gXCJAL2xpYi9wb3N0c1wiO1xuaW1wb3J0IHtyZWRpcmVjdH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHt1cGxvYWRJbWFnZX0gZnJvbSBcIkAvbGliL2Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7cmV2YWxpZGF0ZVBhdGh9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gYXN5bmMgKHByZXZTdGF0ZSwgZm9ybURhdGEpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcbiAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZm9ybURhdGEuZ2V0KCdjb250ZW50Jyk7XG5cbiAgICBsZXQgZXJyb3JzID0gW107XG4gICAgaWYgKCF0aXRsZSB8fCB0aXRsZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdUaXRsZSBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKCFjb250ZW50IHx8IGNvbnRlbnQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlcnJvcnMucHVzaCgnQ29udGVudCBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKCFpbWFnZSB8fCBpbWFnZS5zaXplID09PSAwKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKCdJbWFnZSBpcyByZXF1aXJlZC4nKTtcbiAgICB9XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9ycyB9IDtcbiAgICB9XG5cbiAgICBsZXQgaW1hZ2VVcmw7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgIHRyeSB7XG4gICAgICAgIGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2UoaW1hZ2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW1hZ2UgdXBsb2FkIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcblxuICAgIH1cblxuXG4gICAgYXdhaXQgc3RvcmVQb3N0KHtcbiAgICAgICAgaW1hZ2VVcmw6IGltYWdlVXJsLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHVzZXJJZDogMVxuICAgIH0pO1xuXG4gICAgcmVkaXJlY3QoJy9mZWVkJylcbiAgICByZXZhbGlkYXRlUGF0aCgnLycsICdsYXlvdXQnKVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlUG9zdExpa2UgPSBhc3luYyAocG9zdElkKSA9PiB7XG4gICAgYXdhaXQgdXBkYXRlUG9zdExpa2VTdGF0dXMocG9zdElkLCAyKVxuICAgIHJldmFsaWRhdGVQYXRoKCcvJywgJ2xheW91dCcpXG59XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBK0NhIn0=
}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/components/posts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Posts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$like$2d$icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/like-icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$72e373__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:72e373 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$typescript$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/typescript/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const imageLoader = (config)=>{
    const urlStart = config.src.split('/upload/')[0];
    const urlEnd = config.src.split('/upload/')[1];
    const transformation = `w_200,q_${config.quality}`;
    return `${urlStart}/upload/${transformation}/${urlEnd}`;
};
function Post({ post, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "post",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: post.image,
                    loader: imageLoader,
                    width: 140,
                    height: 100,
                    quality: 50,
                    alt: post.title
                }, void 0, false, {
                    fileName: "[project]/components/posts.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/posts.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Shared by ",
                                            post.userFirstName,
                                            " on",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                dateTime: post.createdAt,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(post.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/components/posts.js",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/posts.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    action: action.bind(null, post.id),
                                    className: post.isLiked ? 'liked' : '',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$like$2d$icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/posts.js",
                                        lineNumber: 37,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/posts.js",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/posts.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/posts.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: post.content
                    }, void 0, false, {
                        fileName: "[project]/components/posts.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/posts.js",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/posts.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function Posts({ posts }) {
    const [optimisticPosts, updateOptimisticPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptimistic"])(posts, (prevPosts, updatePostId)=>{
        const updatePostIndex = prevPosts.findIndex((post)=>post.id === updatePostId);
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
        setTimeout(()=>console.log(2), 0);
        Promise.resolve().then(()=>console.log(3));
        console.log(4);
        return newPosts;
    });
    if (!optimisticPosts || optimisticPosts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "There are no posts yet. Maybe start sharing some?"
        }, void 0, false, {
            fileName: "[project]/components/posts.js",
            lineNumber: 78,
            columnNumber: 12
        }, this);
    }
    const updatePost = async (postId)=>{
        updateOptimisticPosts(postId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$72e373__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["togglePostLike"])(postId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "posts",
        children: optimisticPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Post, {
                    post: post,
                    action: updatePost
                }, void 0, false, {
                    fileName: "[project]/components/posts.js",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, post.id, false, {
                fileName: "[project]/components/posts.js",
                lineNumber: 89,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/posts.js",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/counter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const Counter = ()=>{
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const clickHandler = ()=>{
        setCount((prevState)=>prevState + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: count
            }, void 0, false, {
                fileName: "[project]/components/counter.js",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = Counter;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}}),
"[project]/node_modules/next/dist/server/typescript/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getEntryInfo: null,
    getInfo: null,
    getSource: null,
    getTs: null,
    getTypeChecker: null,
    init: null,
    isAppEntryFile: null,
    isDefaultFunctionExport: null,
    isInsideApp: null,
    isPageFile: null,
    isPositionInsideNode: null,
    log: null,
    removeStringQuotes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getEntryInfo: function() {
        return getEntryInfo;
    },
    getInfo: function() {
        return getInfo;
    },
    getSource: function() {
        return getSource;
    },
    getTs: function() {
        return getTs;
    },
    getTypeChecker: function() {
        return getTypeChecker;
    },
    init: function() {
        return init;
    },
    isAppEntryFile: function() {
        return isAppEntryFile;
    },
    isDefaultFunctionExport: function() {
        return isDefaultFunctionExport;
    },
    isInsideApp: function() {
        return isInsideApp;
    },
    isPageFile: function() {
        return isPageFile;
    },
    isPositionInsideNode: function() {
        return isPositionInsideNode;
    },
    log: function() {
        return log;
    },
    removeStringQuotes: function() {
        return removeStringQuotes;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ts;
let info;
let appDirRegExp;
function log(message) {
    info.project.projectService.logger.info('[next] ' + message);
}
function init(opts) {
    const projectDir = opts.info.project.getCurrentDirectory();
    ts = opts.ts;
    info = opts.info;
    appDirRegExp = new RegExp('^' + (projectDir + '(/src)?/app').replace(/[\\/]/g, '[\\/]'));
    log('Initialized Next.js TypeScript plugin: ' + projectDir);
}
function getTs() {
    return ts;
}
function getInfo() {
    return info;
}
function getTypeChecker() {
    const program = info.languageService.getProgram();
    if (!program) {
        log('Failed to get program while while running getTypeChecker.');
        return;
    }
    const typeChecker = program.getTypeChecker();
    if (!typeChecker) {
        log('Failed to get type checker while running getTypeChecker.');
        return;
    }
    return typeChecker;
}
function getSource(fileName) {
    const program = info.languageService.getProgram();
    if (!program) {
        log('Failed to get program while running getSource for: ' + fileName);
        return;
    }
    const sourceFile = program.getSourceFile(fileName);
    if (!sourceFile) {
        log('Failed to get source file while running getSource for: ' + fileName);
        return;
    }
    return sourceFile;
}
function removeStringQuotes(str) {
    return str.replace(/^['"`]|['"`]$/g, '');
}
const isPositionInsideNode = (position, node)=>{
    const start = node.getFullStart();
    return start <= position && position <= node.getFullWidth() + start;
};
const isDefaultFunctionExport = (node)=>{
    if (ts.isFunctionDeclaration(node)) {
        let hasExportKeyword = false;
        let hasDefaultKeyword = false;
        if (node.modifiers) {
            for (const modifier of node.modifiers){
                if (modifier.kind === ts.SyntaxKind.ExportKeyword) {
                    hasExportKeyword = true;
                } else if (modifier.kind === ts.SyntaxKind.DefaultKeyword) {
                    hasDefaultKeyword = true;
                }
            }
        }
        // `export default function`
        if (hasExportKeyword && hasDefaultKeyword) {
            return true;
        }
    }
    return false;
};
const isInsideApp = (filePath)=>{
    return appDirRegExp.test(filePath);
};
const isAppEntryFile = (filePath)=>{
    return appDirRegExp.test(filePath) && /^(page|layout)\.(mjs|js|jsx|ts|tsx)$/.test(_path.default.basename(filePath));
};
const isPageFile = (filePath)=>{
    return appDirRegExp.test(filePath) && /^page\.(mjs|js|jsx|ts|tsx)$/.test(_path.default.basename(filePath));
};
function getEntryInfo(fileName, throwOnInvalidDirective) {
    const source = getSource(fileName);
    if (source) {
        let isDirective = true;
        let isClientEntry = false;
        let isServerEntry = false;
        ts.forEachChild(source, (node)=>{
            if (ts.isExpressionStatement(node) && ts.isStringLiteral(node.expression)) {
                if (node.expression.text === 'use client') {
                    if (isDirective) {
                        isClientEntry = true;
                    } else {
                        if (throwOnInvalidDirective) {
                            const e = {
                                messageText: 'The `"use client"` directive must be put at the top of the file.',
                                start: node.expression.getStart(),
                                length: node.expression.getWidth()
                            };
                            throw e;
                        }
                    }
                } else if (node.expression.text === 'use server') {
                    if (isDirective) {
                        isServerEntry = true;
                    } else {
                        if (throwOnInvalidDirective) {
                            const e = {
                                messageText: 'The `"use server"` directive must be put at the top of the file.',
                                start: node.expression.getStart(),
                                length: node.expression.getWidth()
                            };
                            throw e;
                        }
                    }
                }
                if (isClientEntry && isServerEntry) {
                    const e = {
                        messageText: 'Cannot use both "use client" and "use server" directives in the same file.',
                        start: node.expression.getStart(),
                        length: node.expression.getWidth()
                    };
                    throw e;
                }
            } else {
                isDirective = false;
            }
        });
        return {
            client: isClientEntry,
            server: isServerEntry
        };
    }
    return {
        client: false,
        server: false
    };
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[{"hostname":"res.cloudinary.com"}]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c1e14bfe._.js.map