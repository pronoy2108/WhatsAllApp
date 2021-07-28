const Api = {}

if (process.env.NODE_ENV === 'development') {
    window.WAA_Api = Api
}

function fetchContent(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(e => {
            const reader = e.body.getReader()
            let srcContent = ''
            reader.read().then(function readMore({done, value}) {
                const td = new TextDecoder("utf-8")
                const str_value = td.decode(value)
                if (done) {
                    resolve(srcContent)
                    return
                }
    
                srcContent += str_value
                return reader.read().then(readMore)
    
            }).catch(() => {
                console.log('Could not load servicworker.js')
                reject()
            })
        })
    })  
}

export const initApi = () => {
    Api.WLAPStore = {}
    window.webpackChunkwhatsapp_web_client.push([
        ['bla2'], {}, function(e) {
          Object.keys(e.m).forEach(function(mod) {
            const res = e(mod);
            if (res && res.Wap) { 
                Api.WLAPWAPStore = new res.Wap() // Is Check
            }
            if (res && res.ContactCollection) {
                Api.WLAPStore.ContactCollection = res.ContactCollection
            }
            if (res && res.PresenceCollection) { 
                Api.WLAPStore.PresenceCollection = res.PresenceCollection
            }
            if (res && res.ProfilePicThumbCollection) { 
                Api.WLAPStore.ProfilePicThumbCollection = res.ProfilePicThumbCollection
            }
          })
        }
      ]);

      return new Promise((resolve, reject) => {resolve()})
    
}

export const getApi = () => {
    if (Api && typeof Api.WLAPStore === "object" && typeof Api.WLAPWAPStore === "object") {
        return Api
    } else {
        console.error('WWapApi is not initialized, call initApi() first')
    }


}