import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import About2vissionCss from './About2vision.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function About2Vision({ displayDevice, showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef(null);
  return (
    <>
      <section className={`${About2vissionCss['vision']} ${About2vissionCss['our-vision']}`} id="our-vision" style={{ background: currentBackground }}>
        <div className={About2vissionCss['flex-about']}>
          <div className={`${About2vissionCss['content-our-vision']} ${About2vissionCss['container-content']}`}>
            <div className={About2vissionCss['vision-top-content']}>
              <h1>
                <Editor

                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision1'
                  initialValue="About Us"
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
              </h1>
              <h1 style={{ "color": "#c0272d" }}>
                <Editor

                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision2'
                  initialValue='Our Vision'
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
              </h1>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Vision3'
                initialValue="<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae qui a facilis, quam non aliquid repellat ab laboriosam molestias ullam assumenda consequuntur!</p>
              "
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
            </div>
            <div className={About2vissionCss['vision-bottom-content']}>
              <div className={About2vissionCss['flex-cont']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision3'
                  initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum similique, perferendis animi laborum dicta esse.</p>"

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
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision4'
                  initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum similique, perferendis animi laborum dicta esse.</p>
              "

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

              </div>
              <div className={About2vissionCss['flex-cont']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision4'
                  initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum
              similique, perferendis animi laborum dicta esse.</p>"

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
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Vision4'
                  initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut unde nulla quod, deserunt ipsam et? Cum
              similique, perferendis animi laborum dicta esse.</p>"

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

              </div>
            </div>
          </div>
          <div className={About2vissionCss['vision-img']}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Feeback 6'
              initialValue={`<img src="https://i.ibb.co/12Yysjd/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg" alt="about-vision" />`}
              init={
                {
                  forced_root_block: "",
                  menubar: false,
                  images_upload_handler: function (blobInfo, success, failure) {
                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                  },
                  images_upload_url: '/upload-images',
                  plugins: [
                    "image"
                  ],
                  toolbar: 'image'
                }}
            />

          </div>
        </div>
      </section>
      <div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
        <GithubPicker
          triangle="top-right"
          onChangeComplete={(color) => {
            setCurrentBackground(color.hex);
          }}
        />
      </div>
    </>
  )
}
