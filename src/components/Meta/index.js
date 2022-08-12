import React from 'react'
import MetaTags from 'react-meta-tags'
import { META_CONTENT } from '../../constants/meta.const'

export const Meta = (props) => {
  const {
    description = META_CONTENT.description,
    siteName = META_CONTENT.site_name,
    imageAlt = META_CONTENT.image_alt,
    robots = META_CONTENT.robots,
    title = META_CONTENT.title,
    image = META_CONTENT.image,
    url = META_CONTENT.url,

    twitterDescription = META_CONTENT.twitter_description,
    twitterImageAlt = META_CONTENT.twitter_image_alt,
    twitterCreator = META_CONTENT.twitter_creator,
    twitterDomain = META_CONTENT.twitter_domain,
    twitterImage = META_CONTENT.twitter_image,
    twitterTitle = META_CONTENT.twitter_title,
    twitterCard = META_CONTENT.twitter_card,
    twitterUrl = META_CONTENT.twitter_url,

    ogDescription = META_CONTENT.og_description,
    ogSiteName = META_CONTENT.og_site_name,
    ogImageAlt = META_CONTENT.og_image_alt,
    ogTitle = META_CONTENT.og_title,
    ogImage = META_CONTENT.og_image,
    ogType = META_CONTENT.og_type,
    ogUrl = META_CONTENT.og_url
  } = props
  return (
    <MetaTags>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='robots' content={robots} />
      <meta name='title' content={title} />

      {/* Open Graph / Facebook */}
      <meta property='og:description' content={ogDescription || description} />
      <meta property='og:site_name' content={ogSiteName || siteName} />
      <meta property='og:image:alt' content={ogImageAlt || imageAlt} />
      <meta property='og:title' content={ogTitle || title} />
      <meta property='og:image' content={ogImage || image} />
      <meta property='og:url' content={ogUrl || url} />
      <meta property='og:type' content={ogType} />

      {/* Twitter */}
      <meta name='twitter:image:alt' content={twitterImageAlt || imageAlt} />
      <meta property='twitter:domain' content={twitterDomain || url} />
      <meta property='twitter:title' content={twitterTitle || title} />
      <meta property='twitter:image' content={twitterImage || image} />
      <meta property='twitter:url' content={twitterUrl || url} />
      <meta name='twitter:creator' content={twitterCreator} />
      <meta property='twitter:card' content={twitterCard} />
      <meta
        property='twitter:description'
        content={twitterDescription || description}
      />
    </MetaTags>
  )
}
