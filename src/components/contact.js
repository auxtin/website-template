import React, { Component } from 'react';
import facebook from '../assets/fb.png';
import mail from '../assets/email.png';
;
class contact extends Component {
    render() {
        return (
            <contact>
            <div className='contact_screen'>
                <h1>Contact Me</h1>
                <ul className='listcontact'>
                <li>
                    <a href='https://www.facebook.com/ScienceNaturePage/?hc_ref=ARR7guMIDYR3FN_EG8ceSwTvq8QSJh5ZJen4Q_iVO08ifDBXxtxrmCF3YfSRYsvVA3s&__xts__[0]=68.ARBWVxdtNC0wztl61sbdtPagLGD6XBATjabHumfgLCF_430BGea1kGBjPHX90gVzWHtv-qrkEhM0q5IDNhjM3d1SYkUKM8hAJUsRJGnf3EgHEFZ5LQcdWp6273sa7JQqRf6zK_m6wDrHAfXKty0DslcSTRzRW8bUceAhdLTL4A8dlyf3DOIl8u5lOp6r4KuvFNf_H07l3yBuUBFaynHL-Kzq_XhAT88EoKabV9-V&__tn__=kC-R'><img src={facebook} width='200' height='200' alt="Facebook"/></a>
                </li>
                <li>
                    <a href='mailto:aleonardo2@ucmerced.edu'><img src={mail} width='200' height='200' alt="Mail"/></a>
                </li>

                </ul>
                
            </div>
            </contact>
        );
    }
}

export default contact;