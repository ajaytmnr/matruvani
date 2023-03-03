import React, { useEffect, useState } from 'react'
import { allBlogs } from '../Const'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBlogListing() {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // strapi url to get all blogs
    const getAllBlogsUrl = allBlogs + '?populate=blogImage';
    const getAllBlogs = async () => {
      await axios.get(getAllBlogsUrl)
        .then(resp => {
          setBlogs(resp.data.data)
          setLoading(false)
        })
        .catch(err => console.log(err.message))
    }
    getAllBlogs()
  }, [])
  return (
    <section className='all-blogs-section'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Recent Blogs</h2>
          </div>
          {
            loading ? <>loading...</> :
              <>
                {
                  blogs.map(blog => {
                    const blogImageUrl = blog.attributes.blogImage.data.attributes.url
                    const blogTitle = blog.attributes.blogTitle
                    const blogContent = blog.attributes.blogContent
                    const blogDate = blog.attributes.date
                    const blogDetailsId = blog.attributes.slug;
                    return (

                      <div className="col-md-6 col-lg-4 pb-4">
                        <ul class="breadcrumb">
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/blogs'>Blog</Link></li>
                        </ul>
                        <Link to={`/blog/${blogDetailsId}`}>
                          <img src={blogImageUrl} alt="" width='100%' />
                          <div className="outer-box">
                            <span className='blogs-date fw-light'>{blogDate}</span>
                            <p className="blogs-title">{blogTitle}</p>
                            <p className="blogs-desc">
                              {blogContent.slice(0, 130)}...
                            </p>
                          </div>
                        </Link>
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

export default AllBlogListing