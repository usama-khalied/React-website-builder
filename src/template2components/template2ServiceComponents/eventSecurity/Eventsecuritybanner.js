import React, { useRef } from 'react'
import EventsecurityCss from './Eventsecuritybanner.module.css'
import Img1 from '../../../assets/template2images/event-secure-banner.jpg'
import { Editor } from '@tinymce/tinymce-react';
import { Navbar2 } from '../../Navbar2';

export default function Eventsecuritybanner({ displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    return (
        <section className={EventsecurityCss['header-img-serv']}>
            <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc} />
            <div className={EventsecurityCss['head-img-text']}>
                <h1 className={EventsecurityCss.head1}>\
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Event Security2'
                        initialValue="EVENT SECURITY"
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
                <div className={EventsecurityCss.dash}></div>

            </div>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='EventSecurity4'
                initialValue={`<img src="${Img1}" alt="event-security" class="w-full h-full object-cover"/>`}
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


        </section>
    )
}
