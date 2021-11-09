import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Accrediation3Css from './Accrediation3.module.css'
import accre1 from '../assets/template3images/accre1.png'
import accre2 from '../assets/template3images/accre2.png'
import accre4 from '../assets/template3images/accre4.png'
import accre7 from '../assets/template3images/accre7.png'
import { Editor } from '@tinymce/tinymce-react';

export default function Accrediation3({ showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("#c01120");
  const editorRef = useRef(null);
  const Accreditation3Array = [
    accre1,
    accre2,
    accre4,
    accre7
  ]
  const [acre3, setAccre3] = useState([...Accreditation3Array])
  const [accredKey, setAccredKey] = useState("")
  const addAccred = () => {
    setAccre3([...acre3, Accreditation3Array[1]])
  }
  const removeAccred = (index) => {
    let newArray = [...acre3];
    newArray.splice(index, 1);
    setAccre3([...newArray])
  }
  return (
    <>
      <section className={Accrediation3Css['heading-sec']}>

        <div className={Accrediation3Css['heading-main-title']}>
          <div className={Accrediation3Css['sub-title']}>
            <h3>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Accre1'
                initialValue=" We are Verified by Govt"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />

            </h3>
          </div>
          <h1>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Accre2'
              initialValue="Accreditation"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
            />
          </h1>
        </div>
      </section>
      <section style={{ background: currentBackground }} className={Accrediation3Css['accrediations-sec']}>
        <div className={Accrediation3Css['container-accre']}>
          <div className={Accrediation3Css['accre-wrapper']}>
            <div className={Accrediation3Css.arow}>
              {/* <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre3'
                  initialValue={`<img src=${accre1} alt="aacre1" class="w-24 h-24 object-cover"/>`}
                  init={{
                    images_upload_handler: function (blobInfo, success, failure) {
                      success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                    },
                    images_upload_url: '/upload-images',
                    forced_root_block: "",
                    menubar: false,
                    plugins: [
                      "image"
                    ],
                    toolbar: 'image'
                  }}
                />

              </div> */}
              {acre3.map((item, index) =>
                <div className={`relative ${Accrediation3Css['a-card']}`}
                  onMouseEnter={() => setAccredKey(String(index))}
                  onMouseLeave={() => setAccredKey("")}
                >
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key={`Accred3Img${index}`}
                    initialValue={`<img src="${item}" alt="Accreditation${index}" class="w-24 h-24 object-cover"/>`}
                    init={{
                      images_upload_handler: function (blobInfo, success, failure) {
                        success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                      },
                      images_upload_url: '/upload-images',
                      forced_root_block: "",
                      menubar: false,
                      plugins: [
                        "image"
                      ],
                      toolbar: 'image'
                    }}
                  />
                  <div className="toBeRemoved" style={accredKey === String(index) ? { position: "absolute", top: "2%", right: "2%" } : { display: "none" }}>
                    <button className="w-8 h-8 bg-BL-600" onClick={() => removeAccred(index)}><i className="fas fa-trash-alt"></i></button>
                  </div>
                </div>
              )}
              <button onClick={() => addAccred()} className="border-2 border-gray-400 text-gray-500 toBeRemoved w-40 h-32 flex justify-evenly flex-col text-center items-center">
                <i className="fas fa-plus text-3xl"></i>
                <h2>Add another Accreditation</h2>
              </button>
            </div>
          </div>

        </div>
      </section>
      <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
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
