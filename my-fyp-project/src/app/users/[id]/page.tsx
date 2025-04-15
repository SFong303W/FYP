// src/app/path/[id]/page.tsx

// ✅ 服务端组件中获取 params
export default function PathDetailPage({ params }: { params: { id: string } }) {
    return (
      <div className="p-6">
        <h1>路径详情页</h1>
        <p>你正在查看学习路径：{params.id}</p>
      </div>
    );
  }
  