const Analytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-86504769-1"
    />

    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-86504769-1');
        `,
      }}
    />
  </>
)
export default Analytics
