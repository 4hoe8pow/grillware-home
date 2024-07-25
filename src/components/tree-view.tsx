import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Blog } from '~/lib/microcms'

export const TreeView = component$(({ data }: { data: Blog[] | null }) => {
    const buildTree = (blogs: Blog[] | null) => {
        if (!blogs) {
            return <p>Loading...</p>
        }
        if (blogs.length === 0) {
            return <p>No blogs available</p>
        }

        // 月ごとにブログをグループ化
        const groupedBlogs = blogs.reduce(
            (acc: { [key: string]: Blog[] }, blog) => {
                const month = blog.publishedAt
                    ? blog.publishedAt.slice(0, 7)
                    : 'Unknown' // yyyy-mmを取得、publishedAtがない場合は'Unknown'とする
                if (!acc[month]) {
                    acc[month] = []
                }
                acc[month].push(blog)
                return acc
            },
            {}
        )

        return (
            <ul class="tree-view">
                {Object.keys(groupedBlogs).map((month) => (
                    <li key={month}>
                        <details open>
                            <summary>{month}</summary>
                            <ul>
                                {groupedBlogs[month].map((blog) => (
                                    <li key={blog.id}>
                                        <Link href={`/topics/${blog.id}`}>
                                            {blog.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                ))}
            </ul>
        )
    }

    return <div>{buildTree(data)}</div>
})
