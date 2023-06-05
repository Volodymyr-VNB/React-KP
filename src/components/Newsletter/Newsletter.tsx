type Props = {}
const Newsletter = (props: Props) => {
  return (
    <div className="getEvery row">
                <div className="getEvery row">
                    <h3 className="post-title-inner">Get Every Newsletter</h3>
                    <h3 className="cat-color">
                        Get notified of the best deals on our WordPress themes.
                    </h3>
                </div>
                <div>
                    <input type="email" className='input' placeholder="Email" />
                    <button type="submit" className="button">
                        <span className="button-text h4 color-white">Subscribe</span>
                    </button>
                </div>
            </div>  
  )
}
export default Newsletter