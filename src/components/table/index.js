export default function Table({
  title,
  columns,
  data,
  footerText,
  onFooterClick,
}) {
  return (
    <section className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-900"> {title} </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="border-b border-gray-400 bg-slate-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="whitespace-nowrap px-7 py-4 text-left text-sm font-medium text-gray-600">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-gray-200 last:border-b-0">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-7 py-2">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footerText && (
        <div className="border-t border-gray-200 py-4 text-center">
          <button onClick={onFooterClick}
            className="text-indigo-600 hover:text-violet-800">
            {footerText}
          </button>
        </div>
      )}

    </section>
  );
}