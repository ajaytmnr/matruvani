import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { allBlogs } from '../Const';

function Blogs() {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        // strapi url to get all blogs
        const getAllBlogsUrl = allBlogs + '?populate=blogImage';
        const getAllBlogs = async () => {
            await axios.get(getAllBlogsUrl)
                .then(resp => {
                    // console.log(resp.data.data);
                    setBlogs(resp.data.data)
                    setLoading(false)
                })
                .catch(err => console.log(err.message))
        }
        getAllBlogs()
    }, [])
    return (
        <section id="demos" className="product_info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Blogs</h3>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to<br /> demonstrate the visual form of a document or</p>
                    </div>
                </div>
                {
                    loading ? <>loading...</> :
                        <>
                            <div className="row">
                                {
                                    blogs.slice(0, 3).map(blog => {
                                        const blogImageUrl = blog.attributes.blogImage.data.attributes.url
                                        const blogTitle = blog.attributes.blogTitle
                                        const blogContent = blog.attributes.blogContent
                                        return (
                                            <div className="col-md-4" key={blog.id}>
                                                <Link to={`blog/${blog.attributes.slug}`}>
                                                    <div className="pr-thumb">
                                                        <img className='img-fluid' src={blogImageUrl} alt="blog" />
                                                        <h4>{blogTitle}</h4>
                                                        <p>{blogContent.slice(0,150)}...</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-12 text-center pt-3">
                                <Link to='/blogs' className='read-more-blogs'>Read more</Link>
                            </div>
                        </>
                }
            </div>
        </section>
    )
}

export default Blogs
