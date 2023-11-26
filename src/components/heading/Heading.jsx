import React from 'react';

const Heading = ({title, desc, color='#414042'}) => (
  <div className="uncol style-light" id='about'>
    <div className="uncoltable">
      <div className="uncell no-block-padding">
        <div className="uncont">
          <div id="ultimate-heading-596765280f852b90f" className="uvc-heading ult-adjust-bottom-margin ultimate-heading-596765280f852b90f uvc-2719" data-hspacer="line_only" data-halign="center" style={{ textAlign: 'center' }}>
            <div className="uvc-main-heading ult-responsive" data-ultimate-target=".uvc-heading.ultimate-heading-596765280f852b90f h1" data-responsive-json-new='{"font-size":"desktop:25px;mobile_landscape:20px;mobile:20px;","line-height":"desktop:35px;"}'>
              <h1 style={{ fontFamily: 'Lato', fontWeight: 700, color: color, marginBottom: '20px' }}>{title}</h1>
            </div>
            <div className="uvc-heading-spacer line_only" style={{ topHeight: '1px' }}>
              <span className="uvc-headings-line" style={{ borderStyle: 'solid', borderBottomWidth: '1px', borderColor: 'rgb(244, 121, 50)', width: '150px', display: 'inline-block' }}></span>
            </div>
          </div>
          <div className="uncode_text_column" style={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', maxWidth: '1000px', margin: 'auto', padding: '40px'}}>
            <p>
                {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Heading;
