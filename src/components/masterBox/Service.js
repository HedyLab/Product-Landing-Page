import React from 'react'
import PropTypes from 'prop-types'


function ServicePage() {

  const items = [
    {
      title: '一.對象定義',
      text: "1.1 條款所提及之用戶：指與 MasterApp 簽約並使用 MasterApp 所有服務方案之代表方，包含公司、公司負責人、公司員工、及公司授權操作本服務之人。",
      textTwo: "1.2 MasterApp 服務：指開辦用戶專屬購物網站、專屬購物App、零煩惱計畫(協助上架、圖文製作服務)、圖文設計、廣告行銷(協助廣告投放服務)，所有在 MasterApp 官方網站上架方案內容及業務專員與用戶簽署之合約內容。",
      textThree: "1.3 業務專員：指 MasterApp 所屬業務專員，負責與用戶簽訂合約之人。",
      textFour: "1.4 消費者：指透過用戶購物網站進行交易、購買商品、使用用戶所提供服務之第三者。",
    },
    {
      title: '二.服務範圍',
      text: "2.1 Master App 服務為SaaS雲端技術之產品，提供用戶電子商務之解決方案為服務宗旨。內容包含提供用戶便捷營運後台、專屬購物網站、專屬App、零煩惱計畫、圖文設計、廣告行銷等等服務內容。",
    },
    {
      title: '三.啟用服務與效力',
      text: "3.1 用戶欲使用 MasterApp 服務，皆需與業務專員簽訂服務合約後，繳付方案總金額。並同意提供所有為搭建網站及上架App的相關內容，包含公司資料、聯絡資訊、負責人資料、網域帳號或申請網域資料、公司Logo原檔、App上架資料、串接數據所需之帳號資料。",
      textTwo: "3.2 用戶在使用 MasterApp 服務期間不得將管理網站後台的帳戶密碼或者消費者資訊洩漏於非公司之人，不得將服務管理權與使用權直接轉讓或銷售於他人，違背者經判定屬實 MasterApp 將採取第四項「終止用戶服務權限」條款處理。",
    },
    {
      title: '四.終止用戶服務權限',
      text: "4.1 用戶有權於30天內通知 MasterApp 提前結束服務終止帳戶使用權限，請注意，提前結束服務需依照與業務專員簽約之合約規定繳付違約金予MasterApp。",
      textTwo: "4.2 當用戶違反本服務條款及簽訂之合約規定時，MasterApp將通知於期限內用戶改善，若同一項違規事件發生第二次，或發生累積超過五項違規事件，MasterApp有權終止用戶所有服務權限，包含電商解決方案、零煩惱計畫、廣告行銷等服務。",
      textThree: "4.3 當用戶在使用期間發生以下事項，經過MasterApp判斷屬實，MasterApp有權終止用戶帳戶，並不需提前通知與用戶確認，用戶所繳納的一切費用，均可不退還：",
      textFour: "(1)直接或間接損害MasterApp商譽。",
      textFive: "(2)用戶在有證據及公開資訊的情形下，被指控從事違法營業行為，或其他違背信用及道德行為。",
      textSix:"(3)用戶利用本服務販售違反法令之商品，散佈惡意釣魚網站、詐騙意圖、電腦病毒、木馬程式，任何可破壞他人之網站連結或程式連結。",
      textSeven:"(4)利用MasterApp服務散播或發表任何具攻擊性、猥褻性、威脅性、毀謗性、歧視性、違反公共秩序或善良風俗或其他不法之文字、圖片或任何形式的檔案。",
      textEight:"(5)用戶上架於專屬購物網站及專屬App之內容對於消費者未履行消費者保護法，包含故意不出貨、無故取消訂單、貨品錯誤故意不換貨、貨品品質惡劣。",
    },
    {
      title: '五.數據使用與蒐集',
      text: "5.1 用戶同意 MasterApp 可以蒐集和並使用用戶於 MasterApp 啟用的任何服務所產生技術數據和相關訊息。 MasterApp 將會不定期蒐集數據，以利優化技術與服務。",
      textTwo: "5.2 MasterApp 可能會蒐集數據來改善服務方案或第三方提供服務或技術，在此情況下，可能將數據提供分享給合作夥伴或第三方技術供應商，前提是數據內容不能識別用戶的個人身份，詳細可參閱本網站之隱私權政策。"
    }
  ]

 
  return (
    <div className=' flex justify-center items-center w-full'>
        <div className='agree-layout'>
          <div className='w-full'>
            <div className='agree-title-row'>
                <div className='agree-title agree-title-col'>
                    服務條款
                </div>
                <div className='agree-title-text agree-title-col'>
                    非常感謝您使用MasterApp的服務方案，請您務必在使用本服務前，了解並詳閱基本的用戶服務條款。
                </div>
            </div>
            <ul customStyles='agree-body-row'>
              {items.map(({title, text ,textBlank,textTwo,textThree,textFour,textFive,textSix,textSeven,textEight}, index) => {
                return (
                  <div className='agree-body-col mb-8' key={index}>
                    <div className='agree-body-col-title'>
                      {title}
                    </div>
                    <div className={`agree-body-col-text`}>
                      <div className=''>
                        {text}
                      </div>
                      <div className={`${textBlank ? '':'display:none'}`} >
                        {textBlank}
                      </div>
                      <div className={`${textTwo ? '':'display:none'}`} >
                        {textTwo}
                      </div>
                      <div className={`${textThree ? '':'display:none'}`} >
                        {textThree}
                      </div>
                      <div className={`${textFour ? '':'display:none'}`} >
                        {textFour}
                      </div>
                      <div className={` ${textFive ? '':'display:none'}`} >
                        {textFive}
                      </div>
                      <div className={` ${textSix ? '':'display:none'}`} >
                        {textSix}
                      </div>
                      <div className={` ${textSeven ? '':'display:none'}`} >
                        {textSeven}
                      </div>
                      <div className={` ${textEight ? '':'display:none'}`} >
                        {textEight}
                      </div>
                    </div>
                </div>
                )
              })}
            </ul>
          </div>
        </div>
    </div>
  )
}

ServicePage.propTypes = {
}
export default ServicePage