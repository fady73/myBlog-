(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),o=a.n(s),c=a(4),i=a(15),l=a(1),u=a(22),m=a(6),p=a(56),d=a(57),h=a(58),f=a.n(h),b=a(5),v=a(16),g=a.n(v),E=a(34),y=a(19),N=a.n(y);N.a.initializeApp({apiKey:"AIzaSyCy8KxOuamWEt3eyWSdUKnzX7hVE-ud-CQ",authDomain:"blog-e6d95.firebaseapp.com",databaseURL:"https://blog-e6d95.firebaseio.com",projectId:"blog-e6d95",storageBucket:"blog-e6d95.appspot.com",messagingSenderId:"433052460027",appId:"1:433052460027:web:9e99a4efd24d203223e15e"});var O=N.a.database(),j="fetch_posts_request",k="fetch_posts_success",P="fetch_posts_fail",_="fetch_post_request",S="fetch_post_success",C="fetch_post_fail",w="delete_post_request",x="delete_post_success",A="delete_post_fail",M="add_comment_success";function I(){return function(e){e({type:j}),O.ref("posts").once("value",function(t){e({type:k,payload:t.val()})},function(t){e({tpye:P,payload:t.message})})}}function T(e){return function(t){t({type:_}),O.ref("posts").child(e).on("value",function(a){var n,r;null!=a.val()&&t((n=a.val(),r=e,function(e){Promise.all([O.ref("users/"+n.uid).once("value"),O.ref("comments/"+r).once("value")]).then(function(t){var a=t[0].val(),s=t[1].val();e({type:S,post:n,id:r,user:a?a.displayName:"",comments:s})})}))},function(e){t({type:C,payload:e.message})})}}function F(e,t){return function(a){a({type:w}),O.ref("posts").child(e).remove(function(){}).then(function(){"function"===typeof t&&t(),a({type:x})}).catch(function(e){a({type:A,payload:e.message})})}}var L={list:[],isFetched:!1},R=a(35),q={title:"",content:"",id:null,uid:null,user:null,createdAt:null,isFetched:!1},B=a(62),D=a.n(B);function U(e){D.a.success(e,{position:"top",effect:"stackslide",timeout:1e3})}var W="create_user_request",V="create_user_success",Y="create_user_fail",z="login_user_request",X="login_user_success",J="login_user_fail",K="logout_user_request",Z="logout_user_success",Q="logout_user_fail",G="get_profile_request",H="get_profile_success",$="get_profile_fail",ee="update_profile_request",te="update_profile_success",ae="update_profile_FAIL";function ne(e){return function(t){t({type:K}),N.a.auth().signOut().then(function(a){e(),t({type:Z,payload:a})}).catch(function(e){t({type:Q,payload:e})})}}var re={isAuthenticated:!1,error:null,user:"guest",uid:null},se=Object(m.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return void 0==window.localStorage.isAuthenticated&&localStorage.setItem("isAuthenticated",!1),Object.assign({},e,{list:g.a.orderBy(t.payload,"createdAt","desc"),isFetched:!0});case"load_more_success":var a=g.a.drop(g.a.orderBy(t.payload,"createdAt","desc"));return Object.assign({},e,{list:g.a.concat(e.list,a),isFetched:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object.assign({},{isFetched:!1});case S:return Object.assign({},e,Object(R.a)({},t.post,{id:t.id,user:t.user,comments:t.comments,isFetched:!0}));case M:return console.log(t.payload),Object.assign({},e,{comments:Object(R.a)({},e.comments,Object(E.a)({},t.id,t.payload))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object.assign({},e,{isAuthenticated:!0,error:null,uid:t.payload.uid});case te:return Object.assign({},e,{user:t.payload.displayName});case X:return localStorage.setItem("isAuthenticated",!0),Object.assign({},e,{isAuthenticated:!0,error:null,user:t.payload.displayName,uid:t.payload.uid});case Z:return localStorage.setItem("isAuthenticated",!1),Object.assign({},re);case H:return Object.assign({},e,{user:t.payload.displayName});default:return e}},form:b.c}),oe=a(9),ce=a(10),ie=a(12),le=a(11),ue=a(13),me=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"onLogout",value:function(){var e=this;this.props.logout(function(){e.props.history.push("/")})}},{key:"renderNavbar",value:function(){var e=this.props.auth;return e.isAuthenticated?r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/users/profile",className:"nav-link"},r.a.createElement("i",{className:"fa fa-user-circle"}),e.user)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link logout-btn",onClick:this.onLogout.bind(this)},r.a.createElement("i",{className:"fa fa-sign-out"}),"Logout"))):r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/users/login",className:"nav-link"},r.a.createElement("i",{className:"fa fa-sign-in"}),"Log In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/users/register",className:"nav-link"},r.a.createElement("i",{className:"fa fa-user-plus"}),"Register")))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-toggleable-md navbar-light bg-faded"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(i.c,{to:"/posts",className:"navbar-brand"},"Simple Blog"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navigation"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/posts",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.c,{exact:!0,activeClassName:"active",to:"/posts/create",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus-circle"}),"New Question"))),this.renderNavbar())))}}]),t}(n.Component);var pe=Object(l.g)(Object(c.b)(function(e){return{auth:e.auth}},{logout:ne})(me)),de=a(63),he=a.n(de),fe=a(64),be=a.n(fe),ve=function(e){var t=e.post,a=new Date(t.createdAt).toJSON();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"post col-sm-10 col-sm-offset-1 animated fadeIn"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement(i.b,{className:"post-title",to:"/posts/".concat(t.id)},t.title)),r.a.createElement("div",{className:"post-content"},r.a.createElement(be.a,{text:t.content,maxLine:"2",ellipsis:"...",trimRight:!0})),r.a.createElement("div",{className:"post-info"},r.a.createElement("i",{className:"fa fa-calendar"}),a.slice(0,10))))},ge=function(e){return r.a.createElement("div",{className:"loader"},"Laoding")},Ee=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).state={searchTerm:""},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"onInputChange",value:function(e){var t=e.target.value.toLowerCase();this.setState({searchTerm:t})}},{key:"onSearchSubmit",value:function(){this.state.searchTerm&&this.props.onSubmit(this.state.searchTerm)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"input-group searchBar"},r.a.createElement("input",{ref:"searchBar",type:"text",className:"form-control",placeholder:"Search for...",onChange:this.onInputChange.bind(this)}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.onSearchSubmit.bind(this)},"Go")))))}}]),t}(r.a.Component),ye=function(e){var t=e.pageNumbers,a=e.currentPage,n=e.handlePaginationClick,s=e.handlePrevNextClick,o=g.a.last(t),c=1,i=o;t.length<4?(c=1,i=o):1==a?(c=1,i=3):2==a?(c=1,i=4):o-a==1?(c=o-3,i=o):o==a?(c=o-2,i=o):(c=a-2,i=Number(a)+2);var l=g.a.slice(t,c-1,i),u=1==a?"page-item disabled":"page-item",m=a==o?" page-item disabled":"page-item";return r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:u},r.a.createElement("a",{className:"page-link","aria-label":"Previous",id:"Prev",onClick:function(e){return s(e,l,a)}},"\xab")),l.map(function(e){return r.a.createElement("li",{className:e==a?"page-item active":"page-item",key:e},r.a.createElement("a",{className:"page-link",id:e,onClick:n},e))}),r.a.createElement("li",{className:m},r.a.createElement("a",{className:"page-link","aria-label":"Next",id:"Next",onClick:function(e){return s(e,l,a)}},"\xbb")))},Ne=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).state={currentPage:1,postsPerPage:2},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=he.a.parse(e.location.search).page;void 0!==t?this.setState({currentPage:t}):this.setState({currentPage:1})}},{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"handlePaginationClick",value:function(e){this.setState({currentPage:e.target.id}),this.props.history.push("/posts?page=".concat(e.target.id))}},{key:"handlePrevNextClick",value:function(e,t,a){var n=g.a.last(t);if(a>1&&"Prev"===e.target.id){var r=a-1;this.setState({currentPage:r}),this.props.history.push("/posts?page=".concat(r))}else if(a<n&&"Next"===e.target.id){var s=Number(a)+1;this.setState({currentPage:s}),this.props.history.push("/posts?page=".concat(s))}}},{key:"renderPosts",value:function(){var e=this.state,t=(e.currentPage,e.postsPerPage),a=this.state.currentPage*t,n=a-t,s=g.a.slice(this.props.posts,n,a);return g.a.map(s,function(e,t){return r.a.createElement(ve,{key:t,post:e})})}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.isFetched;if(!a)return r.a.createElement(ge,null);if(!t.length&&a)return r.a.createElement("div",{className:"post-index"},"There are no posts yet.");for(var n=[],s=1;s<=Math.ceil(t.length/this.state.postsPerPage);s++)n.push(s);return r.a.createElement("div",{className:"post-index"},r.a.createElement("div",{className:"posts"},this.renderPosts()),r.a.createElement("div",{className:"pageNumbers text-center"},r.a.createElement(ye,{currentPage:this.state.currentPage,pageNumbers:n,handlePrevNextClick:this.handlePrevNextClick.bind(this),handlePaginationClick:this.handlePaginationClick.bind(this)})))}}]),t}(n.Component);var Oe=Object(c.b)(function(e){return{posts:e.posts.list,isFetched:e.posts.isFetched}},{fetchPosts:I,deletePost:F})(Ne),je=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).state={filteredPosts:[],postsToLoad:10,lastIndex:0},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchPosts()}},{key:"handleSearchBar",value:function(e){var t=this.props.posts.filter(function(t){return t.title.toLowerCase().match(e)||t.content.toLowerCase().match(e)});this.setState({filteredPosts:t,lastIndex:0}),this.props.history.push("/search")}},{key:"handleLoadMore",value:function(){var e=this.state.lastIndex+this.state.postsToLoad;this.setState({lastIndex:e})}},{key:"renderFilteredPosts",value:function(e){var t=g.a.slice(e,0,this.state.lastIndex+this.state.postsToLoad);return r.a.createElement("div",{className:"post-index"},r.a.createElement("div",{className:"posts"},g.a.map(t,function(e,t){return r.a.createElement(ve,{key:t,post:e})})),r.a.createElement("div",{className:"load-more text-center"},this.state.lastIndex+this.state.postsToLoad<=e.length&&t.length?r.a.createElement("button",{className:"btn btn-secondary text-center load-more-btn",onClick:this.handleLoadMore.bind(this)},"Load More"):""))}},{key:"render",value:function(){for(var e=this,t="/posts"===this.props.location.pathname?this.props.posts:this.state.filteredPosts,a=[],n=1;n<=Math.ceil(t.length/this.state.postsPerPage);n++)a.push(n);return r.a.createElement("div",{className:"index-wrapper"},r.a.createElement(Ee,{onSubmit:this.handleSearchBar.bind(this)}),r.a.createElement(l.b,{exact:!0,path:"/",component:Oe}),r.a.createElement(l.b,{path:"/posts",component:Oe}),r.a.createElement(l.b,{path:"/search",render:function(){return e.renderFilteredPosts(e.state.filteredPosts)}}))}}]),t}(r.a.Component);var ke=Object(c.b)(function(e){return{posts:e.posts.list}},{fetchPosts:I})(je);function Pe(e){var t=e.meta,a=t.touched,n=t.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("input",Object.assign({className:"form-control",type:e.type,placeholder:e.placeholder},e.input)),a&&n?r.a.createElement("div",{className:"form-error"},r.a.createElement("i",{className:"fa fa-warning"}),n):"")}function _e(e){var t=e.meta,a=t.touched,n=t.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("textarea",Object.assign({cols:"30",rows:e.rows,className:"form-control",placeholder:e.placeholder},e.input)),a&&n?r.a.createElement("div",{className:"form-error"},r.a.createElement("i",{className:"fa fa-warning"}),n):"")}function Se(e,t,a,n){var s=t.props.handleSubmit,o="register"===e?r.a.createElement(b.a,{label:"Username",name:"username",placeholder:"Enter Your Username",type:"username",component:Pe}):"";return r.a.createElement(b.b,{onSubmit:s(a.bind(t))},o,r.a.createElement(b.a,{label:"Email",name:"email",placeholder:"Enter Your Email",type:"email",component:Pe}),r.a.createElement(b.a,{label:"Password",name:"password",placeholder:"Enter Your Password",type:"password",component:Pe}),r.a.createElement("div",{className:"bottom-button"},r.a.createElement("button",{className:"btn btn-primary"},n)))}function Ce(e){var t={};return e.title||(t.title="Required"),t}function we(e){var t={};return e.username?e.username.length<2?t.username="Must be at least 2 characters":e.username.length>20&&(t.username="Must be less than 20 characters"):t.username="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Must be at least 6 characters"):t.password="Required",t}var xe=a(3),Ae=a.n(xe),Me=function(e){var t=e.onSubmit,a=e.formType;return r.a.createElement(b.b,{onSubmit:t},r.a.createElement(b.a,{label:"Title",name:"title",type:"text",placeholder:"Enter Post Title",component:Pe}),r.a.createElement(b.a,{label:"Post Content",name:"content",rows:"10",placeholder:"Enter Post Content",component:_e}),r.a.createElement("div",{className:"bottom-button"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"edit"===a?"Save":"Create")))},Ie=Me;Me.propTyps={onSubmit:Ae.a.func.isRequired,formType:Ae.a.oneOf(["edit"])};var Te=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"onSubmit",value:function(e){var t=this,a=Object(R.a)({},e,{uid:this.props.auth.uid});console.log(a),this.props.createPost(a,function(){t.props.history.push("/"),U("The post has been successfully created")})}},{key:"render",value:function(){var e=this.props.handleSubmit;return r.a.createElement("div",{className:"post-form"},r.a.createElement(Ie,{onSubmit:e(this.onSubmit.bind(this)),formType:"create"}))}}]),t}(n.Component),Fe=Object(b.d)({form:"NewPostForm",validate:Ce})(Object(c.b)(function(e){return{auth:e.auth}},function(e){return{createPost:function(t,a){e(function(e,t){var a=e,n=O.ref("posts").push().key;return a.createdAt=N.a.database.ServerValue.TIMESTAMP,a.id=n,function(e){return O.ref("posts/"+n).update(a).then(function(){return t()})}}(t,a))}}})(Te)),Le=function(e){var t=e.post,a=new Date(t.createdAt).toJSON();return r.a.createElement("div",{className:"post-detail"},r.a.createElement("h2",{className:"post-title"},t.title),r.a.createElement("div",{className:"post-creation-time"},r.a.createElement("i",{className:"fa fa-calendar"}),"Created on ",a.slice(0,10)),r.a.createElement("div",{className:"post-creator"},r.a.createElement("i",{className:"fa fa-user-o"}),t.user),r.a.createElement("p",{className:"post-content"},t.content))},Re=function(e){var t=e.comment;return r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"comment-user"},t.user,r.a.createElement("span",null,"object"!=typeof t.createdAt?function(e){var t=Math.floor((new Date-e)/1e3),a=Math.floor(t/31536e3);return a>1?a+" years":(a=Math.floor(t/2592e3))>1?a+" months":(a=Math.floor(t/86400))>1?a+" days":(a=Math.floor(t/3600))>1?a+" hours":(a=Math.floor(t/60))>1?a+" minutes":Math.floor(t)+" seconds"}(t.createdAt)+" ago":"")),r.a.createElement("p",{className:"comment-body"},t.message))};var qe=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchPost(e)}},{key:"onSubmitComment",value:function(e){var t={user:this.props.auth.user,uid:this.props.auth.uid,message:e.comment};this.props.addComment(t,this.props.match.params.id)}},{key:"renderCommentForm",value:function(){var e=this.props.handleSubmit;return this.props.auth.isAuthenticated?r.a.createElement(b.b,{onSubmit:e(this.onSubmitComment.bind(this))},r.a.createElement(b.a,{label:"Comment",name:"comment",rows:"4",placeholder:"Write your comment",component:_e}),r.a.createElement("div",{className:"bottom-button"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))):r.a.createElement("b",null,"Comments")}},{key:"renderComments",value:function(){var e=this.props.post.comments;return g.a.map(e,function(e,t){return r.a.createElement(Re,{comment:e,key:t})})}},{key:"renderButtons",value:function(e){if(this.props.auth.uid===e.uid)return r.a.createElement("div",{className:"form-buttons text-right"},r.a.createElement(i.b,{to:"/posts/edit/".concat(e.id),className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-edit"}),"Edit Post"))}},{key:"render",value:function(){var e=this.props.post;return e.isFetched?r.a.createElement("div",{className:"post-view"},r.a.createElement("div",{className:"post-view-post"},this.renderButtons(e),r.a.createElement(Le,{post:e})),r.a.createElement("div",{className:"post-view-comment"},this.renderCommentForm(),r.a.createElement("div",{className:"comments"},this.renderComments()))):r.a.createElement(ge,null)}}]),t}(n.Component);var Be=Object(b.d)({form:"CommentForm",validate:function(e){var t={};return e.comment||(t.comment="Required"),t},onSubmitSuccess:function(e,t){return t(Object(b.e)("CommentForm"))}})(Object(c.b)(function(e,t){return{post:e.post,auth:e.auth}},function(e){return{fetchPost:function(t){return e(T(t))},addComment:function(t,a){return e(function(e,t){var a=e,n=O.ref("comments/"+t),r=n.push().key;return a.createdAt=N.a.database.ServerValue.TIMESTAMP,function(s){n.child(r).set(a).then(function(){s({type:M,payload:e,id:r})}),O.ref("userComments/"+e.uid+"/"+t).update(Object(E.a)({},r,!0))}}(t,a))}}})(qe)),De=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.id;this.props.fetchPost(e)}},{key:"onDeletePost",value:function(e){var t=this;this.props.deletePost(e,function(){t.props.history.replace("/"),U("The post has been successfully deleted")})}},{key:"onSubmit",value:function(e){var t=this.props.post.id;this.props.editPost(t,e),this.props.history.goBack(),U("The post has been successfully saved")}},{key:"renderButtons",value:function(e){if(this.props.auth.uid===this.props.post.uid)return r.a.createElement("div",{className:"top-buttons text-right"},r.a.createElement(i.b,{to:"/posts/".concat(this.props.post.id),className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-image"}),"View"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.onDeletePost.bind(this,e.id)},r.a.createElement("i",{className:"fa fa-remove"}),"Delete"))}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.post;return a.isFetched?r.a.createElement("div",{className:"post-form"},this.renderButtons(a),r.a.createElement(Ie,{onSubmit:t(this.onSubmit.bind(this)),formType:"edit"})):r.a.createElement(ge,null)}}]),t}(n.Component);var Ue=Object(m.d)(Object(c.b)(function(e){return{post:e.post,auth:e.auth,initialValues:e.post}},function(e){return{fetchPost:function(t){return e(T(t))},deletePost:function(t,a){return e(F(t,a))},editPost:function(t,a){return e(function(e,t){return function(a){return O.ref("posts/"+e).update(t)}}(t,a))}}}),Object(b.d)({form:"EditPostForm",validate:Ce,enableReinitialize:!0}))(De),We=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).state={errorMessage:""},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"onSubmit",value:function(e){var t=this;this.props.register(e.email,e.password,{displayName:e.username},function(){t.props.history.goBack(),U("You have successfully created an account.")},function(e){t.setState({errorMessage:e})})}},{key:"render",value:function(){var e=this.state.errorMessage;return r.a.createElement("div",{className:"user-form"},e&&r.a.createElement("div",{className:"error-message"},e),Se("register",this,this.onSubmit,"Register"))}}]),t}(n.Component);var Ve=Object(b.d)({form:"RegisterForm",validate:we})(Object(c.b)(function(e){return{auth:e.auth}},{register:function(e,t,a,n,r){return function(s){s({type:W}),N.a.auth().createUserWithEmailAndPassword(e,t).then(function(e){s(function(e,t,a){var n=N.a.auth().currentUser;return function(r){r({type:V,payload:e}),n.updateProfile(t).then(function(){r({type:te,payload:t}),a()}),N.a.database().ref("users/"+e.uid).set({displayName:t.displayName,email:e.email})}}(e,a,n))}).catch(function(e){r(e.message),s({type:Y,payload:e})})}}})(We)),Ye=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(le.a)(t).call(this,e))).state={errorMessage:""},a}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"onSubmit",value:function(e){var t=this;this.props.login(e.email,e.password,function(){t.props.history.push("/"),U("You have signed in successfully.")},function(e){t.setState({errorMessage:e})})}},{key:"render",value:function(){var e=this.state.errorMessage;return r.a.createElement("div",{className:"user-form"},e&&r.a.createElement("div",{className:"error-message"},e),Se("login",this,this.onSubmit,"Log In"))}}]),t}(n.Component);var ze=Object(b.d)({form:"LoginForm",validate:we})(Object(c.b)(function(e){return{auth:e.auth}},{login:function(e,t,a,n){return function(r){r({type:z}),N.a.auth().signInWithEmailAndPassword(e,t).then(function(e){a(),r({type:X,payload:e})}).catch(function(e){n(e.message),r({type:J,payload:e})})}}})(Ye)),Xe=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(ce.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.auth().onAuthStateChanged(function(t){t&&(e.props.getProfile(),e.props.initialize({username:e.props.auth.user}))})}},{key:"onSubmit",value:function(e){this.props.updateProfile({displayName:e.username},function(){U("Your profile has been saved successfully.")})}},{key:"renderProfile",value:function(){var e=this.props.handleSubmit;return r.a.createElement(b.b,{onSubmit:e(this.onSubmit.bind(this))},r.a.createElement(b.a,{label:"Username",name:"username",placeholder:"Enter Your Username",type:"text",component:Pe}),r.a.createElement("div",{className:"bottom-button"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"user-form"},this.renderProfile())}}]),t}(n.Component);var Je=Object(b.d)({form:"UserProfileForm",validate:function(e){var t={};return e.username?e.username.length<2?t.username="Must be at least 2 characters":e.username.length>20&&(t.username="Must be less than 20 characters"):t.username="Required",t}})(Object(c.b)(function(e){return{auth:e.auth}},{getProfile:function(){return function(e){e({type:G});var t=N.a.auth().currentUser;e(t?{type:H,payload:t}:{type:$})}},updateProfile:function(e,t){return function(a){a({type:ee});var n=N.a.auth().currentUser;n.updateProfile(e).then(function(){!function(e,t){O.ref("userComments/"+e).once("value").then(function(e){if(null!==e.val()){var a=e.val();Object.keys(e.val()).forEach(function(e){Object.keys(a[e]).forEach(function(a){O.ref("comments/".concat(e,"/").concat(a)).update({user:t.displayName})})})}})}(n.uid,e),O.ref("users/"+n.uid).update(e),t(),a({type:te,payload:e})},function(){a({type:ae})})}}})(Xe)),Ke=a(65),Ze=function(e){var t=e.component,a=e.redirectCheck,n=Object(Ke.a)(e,["component","redirectCheck"]);return"redirect_if_authenticated"===a?r.a.createElement(l.b,Object.assign({},n,{render:function(e){return"false"==localStorage.getItem("isAuthenticated")?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/",state:{from:e.location}}})}})):r.a.createElement(l.b,Object.assign({},n,{render:function(e){return"true"==localStorage.getItem("isAuthenticated")||null==localStorage.getItem("isAuthenticated")?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/users/login",state:{from:e.location}}})}}))},Qe=(a(96),a(99),a(101),function(){var e=Object(d.createLogger)(),t=Object(m.e)(se,Object(m.d)(Object(m.a)(f.a,p.a,e),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return t.dispatch(function(e){N.a.auth().onAuthStateChanged(function(t){e(t?{type:X,payload:t}:ne())})}),t}()),Ge=Object(u.a)();o.a.render(r.a.createElement(c.a,{store:Qe},r.a.createElement(i.a,{history:Ge},r.a.createElement("div",{className:"wrapper"},r.a.createElement(pe,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.d,null,r.a.createElement(Ze,{path:"/users/profile",component:Je,redirectCheck:"redirect_if_guest"}),r.a.createElement(Ze,{path:"/users/register",component:Ve,redirectCheck:"redirect_if_authenticated"}),r.a.createElement(Ze,{path:"/users/login",component:ze,redirectCheck:"redirect_if_authenticated"}),r.a.createElement(Ze,{path:"/posts/create",component:Fe,redirectCheck:"redirect_if_guest"}),r.a.createElement(Ze,{path:"/posts/edit/:id",component:Ue,redirectCheck:"redirect_if_guest"}),r.a.createElement(l.b,{path:"/posts/:id",component:Be}),r.a.createElement(l.b,{path:"/",component:ke})))))),document.getElementById("root"))},66:function(e,t,a){e.exports=a(103)},96:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.b3ad032d.chunk.js.map