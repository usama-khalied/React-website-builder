import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Navbar1.module.css'
import tinymce from 'tinymce/tinymce';
export default function Navbar1({ displayDevice, linksfunc }) {
  const editorRef = useRef(null);
  return (
    <>

      <header className={`${Navbar1moduleCss.template1Header}`}>
        <nav>
          <div className={`${Navbar1moduleCss.navbar}`}>

            <div className={`${Navbar1moduleCss.logo}`}>
              <button style={{ fontWeight: `600` }} >
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="Security"
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                  }}
                />
              </button></div>
            <div className={`${Navbar1moduleCss['nav-links']}`}>
              <div className={`${Navbar1moduleCss['sidebar-logo']}`}>
                <i className={`${Navbar1moduleCss['fas fa-times']}`}></i>
              </div>
              <ul className={`${Navbar1moduleCss.menus}`}>
                <li><button className={`${Navbar1moduleCss.line}`}>{linksfunc ? <a href="index.html">HOME</a> : <>
                  {/* <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    initialValue="HOME"
                    key="Nav1Edit1"
                    id="Nav1Edit1"
                    init={{
                      forced_root_block: "",
                      menubar: false,
                    }}
                  /> */}
                  HOME
                </>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`} >{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`}>SERVICES</button>
                  <ul className={`${Navbar1moduleCss['sub-menu']}`}>
                  <li>{linksfunc ? <a href="static-security.html">STATIC SECURITY</a> : <>STATIC SECURITY</>}</li>
                                        <li>{linksfunc ? <a href="mobile-patrolling.html">MOBILE PATROLLING</a> : <>MOBILE PATROLLING</>}</li>
                                        <li>{linksfunc ? <a href="cctv-monitoring.html">CCTV MONITORING</a> : <>CCTV MONITORING</>}</li>
                                        <li>{linksfunc ? <a href="lock-unlock.html">LOCK & UNLOCK</a> : <>LOCK & UNLOCK</>}</li>
                                        <li>{linksfunc ? <a href="vacant-unit-checks.html">VACANT UNIT CHECKS</a> : <>VACANT UNIT CHECKS</>}</li>
                                        <li>{linksfunc ? <a href="technology-product.html">TECHNOLOGY PRODUCT</a> : <>TECHNOLOGY PRODUCT</>}</li>
                                        <li>{linksfunc ? <a href="manned-guarding.html">MANNED GUARDING</a> : <>MANNED GUARDING</>}</li>
                                        <li>{linksfunc ? <a href="support-management.html">SUPPORT & MANAGEMENT</a> : <>SUPPORT & MANAGEMENT</>}</li>
                                        <li>{linksfunc ? <a href="event-security.html">EVENT SECURITY</a> : <>EVENT SECURITY</>}</li>
                                        <li>{linksfunc ? <a href="guard-house.html">GUARD HOUSE</a> : <>GUARD HOUSE</>}</li>
                                        <li>{linksfunc ? <a href="24-7-surveillance.html">24/7 SURVEILLANCE</a> : <>24/7 SURVEILLANCE</>}</li>
                  </ul>
                </li>

                <li><button className={`${Navbar1moduleCss.line}`} >CONTACT US</button></li>


                <li>



                  <button className={`${Navbar1moduleCss['contact-btn']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Header1'
                      initialValue={`<span> <i class="fas fa-phone-alt"> </i> 020 7946 0020 </span>`}
                      init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />
                  </button>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
