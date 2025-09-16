exports.id=550,exports.ids=[550],exports.modules={2859:(a,b,c)=>{"use strict";c.d(b,{K5:()=>f,Lu:()=>h,qW:()=>g});var d=c(87550);let e=new(c.n(d)())("posts.db");async function f(a){let b="";a&&(b="LIMIT ?");let c=e.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    ${b}`);return await new Promise(a=>setTimeout(a,1e3)),a?c.all(a):c.all()}async function g(a){let b=e.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(a=>setTimeout(a,1e3)),b.run(a.imageUrl,a.title,a.content,a.userId)}async function h(a,b){if(0===e.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(b,a).count){let c=e.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(a=>setTimeout(a,1e3)),c.run(b,a)}{let c=e.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(a=>setTimeout(a,1e3)),c.run(b,a)}}e.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),e.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),e.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===e.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(e.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),e.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `))},2986:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(61369).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/tyergibayev/WebstormProjects/projects/udemy/Next15/mutation-data-project-3/components/posts.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/tyergibayev/WebstormProjects/projects/udemy/Next15/mutation-data-project-3/components/posts.js","default")},2987:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31658);let e=async a=>[{type:"image/png",sizes:"600x600",url:(0,d.fillMetadataSegment)(".",await a.params,"icon.png")+"?6ad4479c42d31fc7"}]},19976:(a,b,c)=>{"use strict";c.d(b,{default:()=>j});var d=c(60687);function e(){return(0,d.jsx)("button",{className:"like-button",children:(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,d.jsx)("path",{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"})})})}var f=c(6475);let g=(0,f.createServerReference)("7fc70bd0ea03d021dcdf39235e8e3be86ced3c6cad",f.callServer,void 0,f.findSourceMapURL,"togglePostLike");var h=c(43210);function i({post:a,action:b}){var c;return(0,d.jsxs)("article",{className:"post",children:[(0,d.jsx)("div",{className:"post-image",children:(0,d.jsx)("img",{src:a.image,alt:a.title})}),(0,d.jsxs)("div",{className:"post-content",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:a.title}),(0,d.jsxs)("p",{children:["Shared by ",a.userFirstName," on"," ",(0,d.jsx)("time",{dateTime:a.createdAt,children:(c=a.createdAt,new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short"}).format(new Date(c)))})]})]}),(0,d.jsx)("div",{children:(0,d.jsx)("form",{action:b.bind(null,a.id),className:a.isLiked?"liked":"",children:(0,d.jsx)(e,{})})})]}),(0,d.jsx)("p",{children:a.content})]})]})}function j({posts:a}){let[b,c]=(0,h.useOptimistic)(a,(a,b)=>{let c=a.findIndex(a=>a.id===b);if(console.log("1 ",c,a),-1===c)return a;let d={...a[c]};console.log("2 ",d),d.likes=d.likes+(d.isLiked?-1:1),d.isLiked=!d.isLiked;let e=[...a];return e[c]=d,console.log("3 ",e),e});if(!b||0===b.length)return(0,d.jsx)("p",{children:"There are no posts yet. Maybe start sharing some?"});let e=async a=>{c(a),await g(a)};return(0,d.jsx)("ul",{className:"posts",children:b.map(a=>(0,d.jsx)("li",{children:(0,d.jsx)(i,{post:a,action:e})},a.id))})}c(37177)},21689:(a,b,c)=>{Promise.resolve().then(c.bind(c,2986))},34841:(a,b,c)=>{Promise.resolve().then(c.bind(c,19976))},42145:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,16133,23)),Promise.resolve().then(c.t.bind(c,16444,23)),Promise.resolve().then(c.t.bind(c,16042,23)),Promise.resolve().then(c.t.bind(c,49477,23)),Promise.resolve().then(c.t.bind(c,29345,23)),Promise.resolve().then(c.t.bind(c,12089,23)),Promise.resolve().then(c.t.bind(c,46577,23)),Promise.resolve().then(c.t.bind(c,31307,23)),Promise.resolve().then(c.t.bind(c,14817,23))},60078:(a,b,c)=>{Promise.resolve().then(c.bind(c,62981)),Promise.resolve().then(c.t.bind(c,85814,23))},60384:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>j,metadata:()=>i});var d=c(37413),e=c(69061),f=c(4536),g=c.n(f);function h(){return(0,d.jsxs)("header",{id:"main-header",children:[(0,d.jsx)(g(),{href:"/",children:(0,d.jsx)("img",{src:e.default.src,alt:"Mobile phone with posts feed on it"})}),(0,d.jsx)("nav",{children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(g(),{href:"/feed",children:"Feed"})}),(0,d.jsx)("li",{children:(0,d.jsx)(g(),{className:"cta-link",href:"/new-post",children:"New Post"})})]})})]})}c(82704);let i={title:"NextPosts",description:"Browse and share amazing posts."};function j({children:a}){return(0,d.jsx)("html",{lang:"en",children:(0,d.jsxs)("body",{children:[(0,d.jsx)(h,{}),(0,d.jsx)("main",{children:a})]})})}},61707:(a,b,c)=>{"use strict";c.r(b),c.d(b,{"7f17593d9fb99131eda781725e1ea941157e9e5fba":()=>n,"7fc70bd0ea03d021dcdf39235e8e3be86ced3c6cad":()=>o});var d=c(91199);c(42087);var e=c(87550);let f=new(c.n(e)())("posts.db");async function g(a){let b=f.prepare(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);return await new Promise(a=>setTimeout(a,1e3)),b.run(a.imageUrl,a.title,a.content,a.userId)}async function h(a,b){if(0===f.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND post_id = ?`).get(b,a).count){let c=f.prepare(`
      INSERT INTO likes (user_id, post_id)
      VALUES (?, ?)`);return await new Promise(a=>setTimeout(a,1e3)),c.run(b,a)}{let c=f.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND post_id = ?`);return await new Promise(a=>setTimeout(a,1e3)),c.run(b,a)}}f.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`),f.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`),f.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      post_id INTEGER, 
      PRIMARY KEY(user_id, post_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
    )`),0===f.prepare("SELECT COUNT(*) AS count FROM users").get().count&&(f.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `),f.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Max', 'Schwarz', 'max@example.com')
  `));var i=c(90141),j=c(9131);if(!process.env.CLOUDINARY_CLOUD_NAME)throw Error("CLOUDINARY_CLOUD_NAME is not set");if(!process.env.CLOUDINARY_API_KEY)throw Error("CLOUDINARY_API_KEY is not set");if(!process.env.CLOUDINARY_API_SECRET)throw Error("CLOUDINARY_API_SECRET is not set");async function k(a){let b=await a.arrayBuffer(),c=a.type,d=Buffer.from(b).toString("base64");return(await j.v2.uploader.upload("data:"+c+";base64,"+d,{folder:"nextjs-course-mutations"})).secure_url}j.v2.config({cloud_name:process.env.CLOUDINARY_CLOUD_NAME,api_key:process.env.CLOUDINARY_API_KEY,api_secret:process.env.CLOUDINARY_API_SECRET});var l=c(7944),m=c(33331);let n=async(a,b)=>{let c,d=b.get("title"),e=b.get("image"),f=b.get("content"),h=[];if(d&&0!==d.trim().length||h.push("Title is required."),f&&0!==f.trim().length||h.push("Content is required."),e&&0!==e.size||h.push("Image is required."),h.length>0)return{errors:h};console.log(h);try{c=await k(e)}catch(a){throw Error("Image upload failed. Please try again.")}await g({imageUrl:c,title:d,content:f,userId:1}),(0,i.redirect)("/feed"),(0,l.revalidatePath)("/","layout")},o=async a=>{await h(a,2),(0,l.revalidatePath)("/","layout")};(0,m.D)([n,o]),(0,d.A)(n,"7f17593d9fb99131eda781725e1ea941157e9e5fba",null),(0,d.A)(o,"7fc70bd0ea03d021dcdf39235e8e3be86ced3c6cad",null)},62981:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d={src:"/_next/static/media/logo.6ad4479c.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEVMaXFPNHjexOmUsr94ba389P3gzu7s5fXh3vTVx+2RcbbZy+e6a6nBr9r4xd5YP4m1m895YKWmg8KogLiPb7fMsttwO4BuNoT///9iSZN9RYuvUZgzM3KFTJaCZrCtkMb21+5qt9PBqd+Fi7qfkcR5nsShcrK8lMy7s92TTpyOUaNtoy2PAAAAHnRSTlMAgf0H/IuUNkT7+XT+Y336O/r8YU67yPx6/Wr8KPp8K/7uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBBQKAIAAEsKMk7S6w6/8PdAOgRGQrAMmii7tmkDTk3Fwlumc+V+4j2DC6Pd0Ehs+41muJqXn7g8YAGCEqA36SfgQTX72XpQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},69061:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d={src:"/_next/static/media/logo.6ad4479c.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEVMaXFPNHjexOmUsr94ba389P3gzu7s5fXh3vTVx+2RcbbZy+e6a6nBr9r4xd5YP4m1m895YKWmg8KogLiPb7fMsttwO4BuNoT///9iSZN9RYuvUZgzM3KFTJaCZrCtkMb21+5qt9PBqd+Fi7qfkcR5nsShcrK8lMy7s92TTpyOUaNtoy2PAAAAHnRSTlMAgf0H/IuUNkT7+XT+Y336O/r8YU67yPx6/Wr8KPp8K/7uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBBQKAIAAEsKMk7S6w6/8PdAOgRGQrAMmii7tmkDTk3Fwlumc+V+4j2DC6Pd0Ehs+41muJqXn7g8YAGCEqA36SfgQTX72XpQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},82704:()=>{},90342:(a,b,c)=>{Promise.resolve().then(c.bind(c,69061)),Promise.resolve().then(c.t.bind(c,4536,23))},94945:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,25227,23)),Promise.resolve().then(c.t.bind(c,86346,23)),Promise.resolve().then(c.t.bind(c,27924,23)),Promise.resolve().then(c.t.bind(c,40099,23)),Promise.resolve().then(c.t.bind(c,38243,23)),Promise.resolve().then(c.t.bind(c,28827,23)),Promise.resolve().then(c.t.bind(c,62763,23)),Promise.resolve().then(c.t.bind(c,97173,23)),Promise.resolve().then(c.bind(c,25587))}};