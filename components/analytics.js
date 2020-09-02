const Analytics = () => (
  <script
    dangerouslySetInnerHTML={{
      __html:`
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86504769-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date());

          gtag('config', 'UA-86504769-1');
        </script>
      `
    }}
  />
)
export default Analytics
