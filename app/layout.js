import './globals.css'
const url='https://www.arpree.com'
const title='Arpree — French Journaling & Writing Practice'
const description='Practise French through daily journaling, creative writing prompts and a supportive community. Write freely, build confidence and make French a daily habit.'
export const metadata = {
 metadataBase:new URL(url),
 title, description,
 applicationName:'Arpree',
 alternates:{canonical:'/'},
 icons:{icon:[{url:'/favicon.svg',type:'image/svg+xml',sizes:'96x96'}]},
 openGraph:{type:'website',url:'/',siteName:'Arpree',title,description,locale:'en_US'},
 twitter:{card:'summary',title,description},
 robots:{index:true,follow:true}
}
const siteData={'@context':'https://schema.org','@type':'WebSite',name:'Arpree',url:url+'/',description,inLanguage:['en','fr']}
export default function RootLayout({children}) {
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteData).replace(/</g,'\\u003c')}}/>{children}</body></html>
}
