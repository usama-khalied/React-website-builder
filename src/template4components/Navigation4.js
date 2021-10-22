import React from 'react'
import Nav4Css from './Navigation4.module.css'
import navlogo from '../assets/template4images/thefnflogo.png'

export default function Navigation4() {
    return (
        <>
            <div className={`${Nav4Css.navWrapper} w-full`}>
                <div className={`flex justify-between items-center py-6 ${Nav4Css.container1}`}>
                    <img src={navlogo} alt="nav-logo" className="w-52" />
                    <nav>
                        <ul className={Nav4Css.navBar}>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>
                                <button className="text-white">HOME</button>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}><button className="text-white">ABOUT US</button></li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownServiceListItem}`}>
                                <section className="cursor-pointer my-4">SERVICES</section>
                                <ul className={`${Nav4Css.dropdownServicesContent} list-none p-0 absolute`}>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>STATIC SECURITY</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>MOBILE PATROLLING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CCTV MONITORING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>LOCK & UNLOCK</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            VACANT UNIT CHECKS
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            TECHNOLOGY PRODUCT
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>MANNED GUARDING</h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            SUPPORT & MANAGEMENT
                                        </h4>
                                    </li>
                                    <li className={`${Nav4Css.servicesLinks} flex my-8 mx-4`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>EVENT SECURITY</h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownSectorsListItem}`}>
                                <section className="cursor-pointer my-4">SECTORS</section>
                                <ul className={`${Nav4Css.dropdownSectorsContent} list-none p-0 absolute`}>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CONSTRUCTION</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>CORPORATE</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>INDUSTRIAL</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>RETAIL</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>LOGISTICS</h4>
                                    </li>
                                    <li className={`${Nav4Css.sectorsLink} flex my-8 mx-4`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>
                                            PROPERTY MANAGEMENT
                                        </h4>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>
                                <button className="text-white">CONTACT US</button>
                            </li>
                        </ul>
                        <section className={Nav4Css.hamburger}>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                        </section>
                    </nav>
                </div>
            </div>
        </>
    )
}