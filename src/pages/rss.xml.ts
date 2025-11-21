import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { HOME, SITE } from '../consts'

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = await getCollection('writings')
  const projects = await getCollection('projects')

  const items = [...blog, ...projects].sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
  )

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/${item.collection}/${item.slug}/`,
      author: SITE.NAME,
      image: new URL(`/og/${item.slug}.png`, context.site).toString(),
    })),
  })
}
