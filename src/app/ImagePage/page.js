"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Directly using the Google Drive download URL
        const url = "   ";
        
        // For better reliability, you might want to use the Google Drive API or convert to a direct link
        // This is a temporary solution that might not work consistently
        setImageUrl(url);
        setLoading(false);
      } catch (err) {
        setError('Failed to load image');
        setLoading(false);
        console.error('Error fetching image:', err);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>Image from Google Drive</title>
        <meta name="description" content="Displaying image from Google Drive" />
      </Head>

      <main className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Google Drive Image</h1>
        
        {loading && <p className="text-center py-10">Loading image...</p>}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {imageUrl && !loading && (
          <div className="mt-4">
            <img 
              src={imageUrl} 
              alt="From Google Drive" 
              className="max-w-full h-auto rounded border border-gray-200"
              onError={() => setError('Failed to load image - URL might be invalid')}
            />
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600 break-all">
                Image URL: {imageUrl}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ImagePage;