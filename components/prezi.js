import { useEffect} from 'react'

function graphicFn(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}};

const PreziDesign  = () => {
  useEffect(() => {
    if (document) {
      graphicFn(document,0,"infogram-async")
    }
  }, [])

  return (
    <div className="container">
      <div className="infogram-embed" data-id="27ddf7a2-b784-4919-93e4-fb3b9238a240" data-type="interactive" data-title="Hive"></div>
      <style jsx>{`
        .container {
          height: 25em;
          width: 38em;
        }
      `}</style>
    </div>
  )
}

export default PreziDesign
