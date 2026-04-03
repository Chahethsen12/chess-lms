import { useParams } from 'react-router-dom';

export function Lesson() {
  const { moduleId } = useParams<{ moduleId: string }>();

  return (
    <div className="p-6">
      <h1 className="font-display text-3xl font-bold mb-6">
        Lesson: {moduleId}
      </h1>
      <div className="bg-surface rounded-xl p-6 border border-white/10">
        <p className="text-gray-400">
          Lesson content for module "{moduleId}" will be displayed here.
        </p>
      </div>
    </div>
  );
}
