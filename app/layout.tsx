import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ContentCraft · 公众号 SVG 排版复用工具',
  description: '开源微信公众号排版复用工具：导入文章、提取 SVG 模块、替换图片、沉淀本地素材库。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
