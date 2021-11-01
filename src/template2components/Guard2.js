import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';
import Guard2moduleCss from './Guard2.module.css'

export const Guard2 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef();

  return (
    <>
      <section style={{ background: currentBackground }}>
        <section style={{ background: currentBackground }}>
          <section className={`${Guard2moduleCss['our-guards']}`} id="our-team" style={{ background: currentBackground }}>
            <section className={`${Guard2moduleCss['head-main']}`}>
              <h1 className={`${Guard2moduleCss.MainHeading}`}><span className={`${Guard2moduleCss.SpanColor}`}> OUR </span> Guard</h1>
              <div className={`${Guard2moduleCss.spanDesc}`}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Guard(2)1'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue={`<p>Our Guards are best in town and premium Lorem ipsum dolor sit amet.</p>`}
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />
              </div>
              <div className={`${Guard2moduleCss.divMainHeading}`}>
                <div className={`${Guard2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div>
                <img className={`${Guard2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="dot" />
                <div className={`${Guard2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
              </div>
            </section>
            <div className={`${Guard2moduleCss['container-guards-wrapper']}`}>
              <div className={`${Guard2moduleCss['container-guards']}`} data-aos="fade-right">

                <div className={`${Guard2moduleCss.box1}`}>
                  {/* <img src="https://i.ibb.co/tJdb2JZ/news1.png" alt="news1" /> */}
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/tJdb2JZ/news1.png" alt="about" class="${Guard2moduleCss.bgImg} object-cover"/>`}
                    init={{
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
                <div className={`${Guard2moduleCss.box4}`}>
                  <h1 className={`${Guard2moduleCss.h1}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Guard(2)2'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Lorem Lupsum"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />

                  </h1>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)8'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Guard2moduleCss.dash}">Loremhhhh ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for
                        previewing layouts and visual mockups.</p>`}
                    init={{
                      plugins: [
                        "link"
                      ],
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />

                  <div className={`${Guard2moduleCss['icons-guards']}`}>
                    <div className={`${Guard2moduleCss['span-guards']}`}></div>
                    <div className={`${Guard2moduleCss['icons-g']}`}>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-facebook i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-twitter i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-youtube i"></i></a>
                    </div>
                  </div>


                </div>
                <div className={`${Guard2moduleCss.box3}`}>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img src="https://i.ibb.co/kqLdps8/news2.png" alt="about" class="${Guard2moduleCss.bgImg} object-cover"/>`}
                    init={{
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
                <div className={`${Guard2moduleCss.box4}`}>
                  <h1 className={`${Guard2moduleCss.h1}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Guard(2)2'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Lorem Lupsum"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />
                  </h1>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)10'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Guard2moduleCss.pg}">Loremhhhh ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for
                        previewing layouts and visual mockups.</p>`}
                    init={{
                      plugins: [
                        "link"
                      ],
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />
                  <div className={`${Guard2moduleCss['icons-guards']}`}>
                    <div className={`${Guard2moduleCss['span-guards']}`}></div>
                    <div className={`${Guard2moduleCss['icons-g']}`}>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-facebook i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-twitter i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-youtube i"></i></a>
                    </div>
                  </div>


                </div>
                <div className={`${Guard2moduleCss.box5}`}>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/c8STtRy/news3.png" alt="about" class="${Guard2moduleCss.bgImg} object-cover"/>`}
                    init={{
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
                <div className={`${Guard2moduleCss.box4}`}>
                  <h1 className={`${Guard2moduleCss.h1}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Guard(2)12'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Lorem Lupsum"
                      init={{
                        plugins: [
                          "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />
                  </h1>

                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard(2)15'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Guard2moduleCss.pg}">Loremhhhh ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and
                        publishing industries for
                        previewing layouts and visual mockups.</p>`}
                    init={{
                      plugins: [
                        "link"
                      ],
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />

                  <div className={`${Guard2moduleCss['icons-guards']}`}>
                    <div className={`${Guard2moduleCss['span-guards']}`}></div>
                    <div className={`${Guard2moduleCss['icons-g']}`}>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-facebook i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-twitter i"></i></a>
                      <a href={2}><i style={{ color: `white`, margin: `0 0.75rem` }} className="fab fa-youtube i"></i></a>
                    </div>
                  </div>


                </div>







              </div>
            </div>
          </section>
        </section>
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
