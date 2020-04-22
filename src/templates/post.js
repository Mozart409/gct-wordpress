import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author
}) => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate'>
        {title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div style={{ marginTop: `4rem` }}>
        <p>
          {date} - posted by{' '}
          <Link to={`/author/${author.slug}`}>{author.name}</Link>
        </p>
        {categories && categories.length ? (
          <div>
            <h4>Categories</h4>
            <ul className='taglist'>
              {categories.map(category => (
                <li key={`${category.slug}cat`}>
                  <Link to={`/categories/${category.slug}/`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul className='taglist'>
              {tags.map(tag => (
                <li key={`${tag.slug}tag`}>
                  <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  categories: PropTypes.array,
  tags: PropTypes.func,
  date: PropTypes.string,
  author: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`

/* query BlogPostByID($id: String!) {
  wordpressPost(id: { eq: $id }) {
    id
    title
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    categories {
      name
      slug
    }
    tags {
      name
      slug
    }
    author {
      name
      slug
    }
  }
} */
