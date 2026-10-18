import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="مسیر" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index < items.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="text-gold-600 hover:text-gold-700 transition-colors"
                >
                  {item.name}
                </Link>
                <ChevronLeft
                  size={14}
                  className="text-gray-400"
                />
              </>
            ) : (
              <span className="text-gray-500 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
