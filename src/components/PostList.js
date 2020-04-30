import React from 'react'
import propTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogIntro = () => {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            From the blog
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PostList () {
  const data = useStaticQuery(graphql`
    query PostList {
      allWordpressPost(
        limit: 10
        sort: { fields: date }
        filter: { status: { eq: "publish" } }
      ) {
        totalCount
        edges {
          node {
            date(formatString: "DD.MM.YYYY")
            author {
              name
              id
              avatar_urls {
                wordpress_48
              }
              path
            }
            excerpt
            featured_media {
              link
              alt_text
              source_url
            }
            categories {
              name
            }
            title
            path
            id
          }
        }
      }
    }
  `)
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <BlogIntro />
      <div className='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none'>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={node.featured_media.source_url}
                  alt=''
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm leading-5 font-medium text-indigo-600'>
                    <a href='#' className='hover:underline'>
                      Blog
                    </a>
                  </p>
                  <a href='#' className='block'>
                    <h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                      {node.title}
                    </h3>

                    <div
                      className='mt-3 text-base leading-6 text-gray-500'
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href='#'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src='https://secure.gravatar.com/avatar/054ec35269a1f8ad5db5f8f64d6aa83d?s=48&d=mm&r=g'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm leading-5 font-medium text-gray-900'>
                      <a href='#' className='hover:underline'>
                        {node.author.name}
                      </a>
                    </p>
                    <div className='flex text-sm leading-5 text-gray-500'>
                      <time dateTime={node.date}>{node.date}</time>
                      {/* <span className='mx-1'>&middot;</span>
                      <span>6 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

PostList.propTypes = {}
