import React, { useRef } from 'react'
import Accrediation3Css from './Accrediation3.module.css'
import accre1 from '../assets/template3images/accre1.png'
import accre2 from '../assets/template3images/accre2.png'
import accre3 from '../assets/template3images/accre3.png'
import accre4 from '../assets/template3images/accre4.png'
import accre5 from '../assets/template3images/accre5.png'
import accre6 from '../assets/template3images/accre6.png'
import accre7 from '../assets/template3images/accre7.png'
import { Editor } from '@tinymce/tinymce-react';

export default function Accrediation3() {
  const editorRef = useRef(null);
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
      <section className={Accrediation3Css['accrediations-sec']}>
        <div className={Accrediation3Css['container-accre']}>
          <div className={Accrediation3Css['accre-wrapper']}>
            <div className={Accrediation3Css.arow}>
              <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre3'
                  initialValue={`< img src=${accre1} alt="aacre1" w-96 h-64 object-cover"/>`}
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

              </div>
              <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre4'
                  initialValue={`<img src=${accre2} alt="accre2" w-96 h-64 object-cover"/>`}
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


              </div>
              <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre5'
                  initialValue={`<img src=${accre3} alt="accre3" /> w-96 h-64 object-cover"/>`}
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


              </div>
              <div className={Accrediation3Css['a-card']}>

                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre6'
                  initialValue={`<img src=${accre4} alt="accre4" w-96 h-64 object-cover"/>`}
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

              </div>
              <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre6'
                  initialValue={`<img src=${accre5} alt="accre5" w-96 h-64 object-cover"/>`}
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


              </div>
              <div className={Accrediation3Css['a-card']}>

                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre6'
                  initialValue={`img src=${accre6} alt="accre6"  w-96 h-64 object-cover"/>`}
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
              </div>
              <div className={Accrediation3Css['a-card']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Accre6'
                  initialValue={`img src=${accre7} alt="accre7"  w-96 h-64 object-cover"/>`}
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

              </div>

            </div>


          </div>

        </div>
      </section>
    </>
  )
}
