
import React, { useRef, useState } from 'react';
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';
import Blog4Css from './Blog4.module.css';

export default function Blog4({ showPopup, overSection }) {
    const [currentBackground, setCurrentBackground] = useState("black");

    const editorRef = useRef(null);
    return (
        <>
            <section className={` py-32 px-0 w-full ${Blog4Css.sectionBlog}`} style={{ background: currentBackground }}>
                <div className={`text-center ${Blog4Css.headingWrapper}`}>
                    {/* <TextH3 classStyle={Blog4Css.blogMainHead} text="WHATS NEW" /> */}
                    <h3 className="Blog4Css">
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="WHATS NEW"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                            }}
                        />
                    </h3>
                    {/* <TextH1 className="text-white font-black mb-12 text-5xl" text="Latest News" /> */}

                    <h1 style={{ color: `#fff`, width: `100%`, fontSize: `48px`, fontWeight: `600` }}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed2'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Latest News"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                            }}
                        />
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap justify-around items-stretch">
                        <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-between`}>
                            {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news1} alt="news 1" /> */}
                            <div className="mx-auto my-8">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blogIm1'
                                    initialValue={`<img src="https://i.ibb.co/tJdb2JZ/news1.png" alt="news 1" class="${Blog4Css.contImg} w-96 h-52 object-cover border-b-4"/>`}
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
                            {/* <TextH1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                            <h1 style={{ fontSize: `22px`, color: `rgb(26, 195, 224)`, fontWeight: `600`, margin: `0 auto` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blog4ed3'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Personal Security Services"
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                    }}
                                />
                            </h1>
                            {/* <TextPara className="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed4'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span class="readMoreDots" id="blog4ParaDots1">...</span><span id="blog4ParaText1" class="readMoreText">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>`}
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
                            <button id="blog4readbtn1" className="text-white inline" onClick={() => {
                                let dots = document.getElementById("blog4ParaDots1")
                                dots.style.display = "none"
                                let read = document.getElementById("blog4ParaText1")
                                read.style.display = "initial"
                                let btn = document.getElementById("blog4readbtn1")
                                btn.style.display = "none"
                            }}>Read More</button>
                            <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                {/* <ButtonText className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}

                                <button><Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blog4ed5'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Read More"
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                    }}
                                />
                                </button>
                            </div>
                        </div>
                        <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-between`}>
                            {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news2} alt="news 2" /> */}
                            <div className="mx-auto my-8">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blogIm2'
                                    initialValue={`<img src="https://i.ibb.co/kqLdps8/news2.png" alt="news 2" class="${Blog4Css.contImg} w-96 h-52 object-cover border-b-4"/>`}
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
                            {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                            <h1 style={{ fontSize: `22px`, color: `rgb(26, 195, 224)`, fontWeight: `600`, margin: `0 auto` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blog4ed6'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Personal Security Services"
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                    }}
                                />
                            </h1>
                            {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed7'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span class="readMoreDots" id="blog4ParaDots2">...</span><span id="blog4ParaText2" class="readMoreText">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>`}
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />
                            <button id="blog4readbtn2" className="text-white" onClick={() => {
                                let dots = document.getElementById("blog4ParaDots2")
                                dots.style.display = "none"
                                let read = document.getElementById("blog4ParaText2")
                                read.style.display = "initial"
                                let btn = document.getElementById("blog4readbtn2")
                                btn.style.display = "none"
                            }}>Read More</button>
                            <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                                <button>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='blog4ed8'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Read More"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-between`}>
                            {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news3} alt="news 3" /> */}
                            <div className="mx-auto my-8">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blogIm3'
                                    initialValue={`<img src="https://i.ibb.co/c8STtRy/news3.png" alt="news 3" class="${Blog4Css.contImg} w-96 h-52 object-cover border-b-4"/>`}
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
                            {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                            <h1 style={{ fontSize: `22px`, color: `rgb(26, 195, 224)`, fontWeight: `600`, margin: `0 auto` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='blog4ed9'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Security For Bussiness"
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                    }}
                                />
                            </h1>
                            {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed10'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span class="readMoreDots" id="blog4ParaDots3">...</span><span id="blog4ParaText3" class="readMoreText">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>`}
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />
                            <button id="blog4readbtn3" className="text-white" onClick={() => {
                                let dots = document.getElementById("blog4ParaDots3")
                                dots.style.display = "none"
                                let read = document.getElementById("blog4ParaText3")
                                read.style.display = "initial"
                                let btn = document.getElementById("blog4readbtn3")
                                btn.style.display = "none"
                            }}>Read More</button>
                            <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                                <button>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='blog4ed11'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Read More"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
        </>
    );
}
