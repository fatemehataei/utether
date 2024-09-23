import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه ای تتر(دلار)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>

         <br-x />
         

      <div style={{width:"100%",minHeight: 200 , backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ufcbfix9gcDsZ8OSF5PChkXMDK3xhTi1SQ&s')"}}>
        
        
        <div style={{
          width: "50%", height: 50, backgroundColor: "white", borderRadius: 20,
          textAlign: "center", backgroundImage:"url('')",fontSize:14
                  }}>

          <br-x />
          <br-xx />
          لحظه ای :{(props.p.price as number).toLocaleString("fa-IR")}&#128178;
          <br-x/>
        </div>

        <br-x />
        

        <div style={{
          width: "50%", height: 50, backgroundColor: "white", borderRadius: 20,
          textAlign: "center",fontSize:14,
        }}>
          <br-x />
          <br-xx />
          تغییرات ۲۴ ساعت: ٪ {(Number(props.p.diff24d as number)).toLocaleString("fa-IR")}&#128178;
        </div>

        <br-x />
        

        <div style={{
          width: "50%", height: 50, backgroundColor: "white", borderRadius: 20,
          textAlign: "center",fontSize:14,
        }}>
          <br-x />
          <br-xx />
        تغییرات هفتگی ٪ {(Number(props.p.diff7d as number)).toLocaleString("fa-IR")}&#128178;
        </div>

        <br-x />
        

        <div style={{
          width: "50%", height: 50, backgroundColor: "white", borderRadius: 20,
          textAlign: "center",fontSize:14,
        }}>
          <br-x />
          
        تغییرات ماهانه ٪ {(Number(props.p.diff30d as number)).toLocaleString("fa-IR")}&#128178;
        </div>

        <br-x/>
        <br-xx/>
      </div>

        <center style={{fontSize:12}}>
          تهیه شده توسط تیم پژوهشی هایزنبرگ
        </center>

     
      </Window >


    </div >
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT
  console.log("price:", p)


  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}