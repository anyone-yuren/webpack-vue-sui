export default (router) =>{
	router.map({
		'/content':{
			component:require('./view/content.vue'),
			subRoutes:{
				'/':{
					component:require('./components/notice.vue')
				},
				'/notice':{
					component:require('./components/notice.vue')
				},
				'/news':{
					component:require('./components/news.vue')
				},
				'/moods':{
					component:require('./components/moods.vue')
				},
				'/commodity':{
					component:require('./components/commodity.vue')
				}
			}
		},
		'/indent':{
			component:require('./view/indent.vue')
		},
		'/member':{
			component:require('./view/member.vue')
		},
		'/info':{
			component:require('./view/info.vue')
		}
	});  
	
	router.redirect({
	'*': '/content/news'
	})
	
	router.beforeEach(({to, from, next}) => {
	    let toPath = to.path
	    let fromPath = from.path
	    console.log('to: ' + toPath + ' from: ' + fromPath)
//	    if (toPath.replace(/[^/]/g, '').length > 1) {
		toPath = toPath.replace(/^([^\?]*).*$/,'$1');
	    if (toPath == "/info") {
	      router.app.isIndex = false
	    }
	    else {
	      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
	      router.app.isIndex = depath ? 0 : 1
	    }
	    next() 
	})
}
 