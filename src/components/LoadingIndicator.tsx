export default function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-primary-200"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-t-2 border-l-2 border-primary-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="h-5 w-5 text-primary-500" />
        </div>
      </div>
    </div>
  );
} 