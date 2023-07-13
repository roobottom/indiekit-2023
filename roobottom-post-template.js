import YAML from 'yaml'

const createSummaryFromContent = (content) => {
  var regexp = RegExp(/(^.*?[a-z]{2,}[.!?])\s+\W*/, 'm')
  return (regexp.exec(content) === null) ? content : regexp.exec(content)[0].trim()
}

export const roobottomPostTemplate = (properties) => {
  
  let content
  if (properties.content) {
    content = properties.content.text || properties.content.html || properties.content;
    content = `${content}\n`
  } else {
    content = ''
  }

  properties = {
    date: properties.published,
    summary: createSummaryFromContent(content),
    ...(properties.name && { title: properties.name }),
    ...(properties.category && { tags: properties.category }), //custom:`category`->`tags`
    ...(properties.start && { start: properties.start }),
    ...(properties.end && { end: properties.end }),
    ...(properties.rsvp && { rsvp: properties.rsvp }),
    ...(properties.location && { location: properties.location }),
    ...(properties.checkin && { checkin: properties.checkin }),
    ...(properties.audio && { audio: properties.audio }),
    ...(properties.photo && { photo: properties.photo }),
    ...(properties.video && { video: properties.video }),
    ...(properties['bookmark-of'] && { 'bookmark-of': properties['bookmark-of'] }),
    ...(properties['like-of'] && { 'like-of': properties['like-of'] }),
    ...(properties['repost-of'] && { 'repost-of': properties['repost-of'] }),
    ...(properties['in-reply-to'] && { 'in-reply-to': properties['in-reply-to'] }),
    ...(properties['post-status'] === 'draft' && { draft: true }),
    ...(properties.visibility && { visibility: properties.visibility }),
    ...(properties.syndication && { syndication: properties.syndication }),
    ...(properties['mp-syndicate-to'] && { 'mp-syndicate-to': properties['mp-syndicate-to'] })
  };
  let frontmatter = YAML.stringify(properties);
  frontmatter = `---\n${frontmatter}---\n`;

  return frontmatter + content;
}