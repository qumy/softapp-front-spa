import React from "react";

class Gallery extends React.Component {
  render() {
    return (
      <div tabIndex={-1} role="dialog" aria-hidden="true" className="pswp">
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button
                title="Close (Esc)"
                className="pswp__button pswp__button--close"
              />
              <button
                title="Share"
                className="pswp__button pswp__button--share"
              />
              <button
                title="Toggle fullscreen"
                className="pswp__button pswp__button--fs"
              />
              <button
                title="Zoom in/out"
                className="pswp__button pswp__button--zoom"
              />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              title="Previous (arrow left)"
              className="pswp__button pswp__button--arrow--left"
            />
            <button
              title="Next (arrow right)"
              className="pswp__button pswp__button--arrow--right"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__cent" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
