import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { allBlogs } from '../Const'

function BlogContents() {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch single blog data from strapi
        const getSingleBolgoUrl = allBlogs + `?filters[slug][$eq]=${id}&populate=blogImage`

        const getSingleBolg = async () => {
            await axios.get(getSingleBolgoUrl)
                .then(resp => {
                    setBlog(resp.data.data)
                    setLoading(false)
                })
                .catch(err => console.log(err.message))
        }
        getSingleBolg()
    }, [])

    return (
        <section className='p-3 blog-content-sec'>
            <div className="container">
                <div className="row">
                    {
                        loading ? <>Loading...</> :
                            <>
                                {
                                    blog.map(blog => {
                                        const blogImage = blog.attributes.blogImage.data.attributes.url
                                        return (
                                            <div key={blog.id}>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <h3 className="blog-title">{blog.attributes.blogTitle}</h3>
                                                            <p className='published-date'>{blog.attributes.date}</p>
                                                            <div className="col-12">
                                                            <ul class="breadcrumb">
                                                                <li><Link to='/'>Home</Link></li>
                                                                <li><Link to='/blogs'>Blog</Link></li>
                                                                <li className='text-muted'>{blog.attributes.blogTitle.slice(0,35)}...</li>
                                                            </ul>
                                                            </div>
                                                        </div>

                                                        <div className="featured-img-outer">
                                                            <img className='featured-img' src={blogImage} alt="blog-post" />
                                                        </div>

                                                        <div className="col-md-12 blog-content">
                                                            <p className="paras" style={{ whiteSpace: 'pre-line' }}>
                                                                {blog.attributes.blogContent}
                                                            </p>
                                                            {
                                                                blog.attributes.authorName &&
                                                                <>Autor: <strong className='author-name'>{blog.attributes.authorName}</strong></>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogContents


