import { Editor } from '@tinymce/tinymce-react';
import React, {useRef} from 'react'

export default function Hero3Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="relative text-center" style={{ width: "96rem", height: "50rem" }}>
                {/* <img src="https://i.ibb.co/jRSgBwv/background1.jpg" alt="background1" border="0">
                <img src="https://i.ibb.co/c8STtRy/news3.png" alt="news3" border="0">
                    <img src="https://i.ibb.co/pPMDx5D/background2.jpg" alt="background2" border="0"> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Service4Im1'
                    initialValue={`<img src="https://i.ibb.co/c8STtRy/news3.png" alt="news3" class="object-cover" style="width:96rem; height:50rem;"/>`}
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
                <div className="absolute top-96 left-36 flex flex-col justify-center items-center w-4/5">
                    <h1 className="text-8xl font-bold text-BL-500">
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Security Services"
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
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p class="text-2xl text-white">Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p>`}
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
                    <div className="flex justify-evenly items-center w-full mt-8">
                        <button className="text-white bg-BL-500 rounded-3xl px-7 py-2 text-3xl">Contact Us</button>
                        <button className="text-black bg-white rounded-3xl px-7 py-2 text-3xl">Get Quotes</button>
                    </div>
                </div>
            </section>
        </>
    )
}
