'use client';

import React from 'react';
import { X, Facebook, Twitter, Linkedin, Mail, Share } from 'lucide-react';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: string;
        name: string;
        category: string;
        description?: string;
        image?: string;
        finish?: string;
        thickness?: string;
    };
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `Check out ${product.name} from GD Laminates${product.description ? ': ' + product.description : ''}`;

    const sharePlatforms = [
        {
            name: 'Facebook',
            icon: <Facebook className="w-5 h-5" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'Twitter',
            icon: <Twitter className="w-5 h-5" />,
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
            color: 'bg-sky-500 hover:bg-sky-600'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: 'bg-blue-700 hover:bg-blue-800'
        },
        {
            name: 'Email',
            icon: <Mail className="w-5 h-5" />,
            url: `mailto:?subject=Check out this product from GD Laminates&body=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`,
            color: 'bg-gray-600 hover:bg-gray-700'
        }
    ];

    const handleShare = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Handle native sharing if available
    const handleNativeShare = () => {
        if (typeof navigator !== 'undefined' && 'share' in navigator) {
            navigator.share({
                title: `GD Laminates - ${product.name || 'Product'}`,
                text: shareText,
                url: shareUrl,
            })
                .then(() => {
                    console.log('Shared successfully');
                    onClose();
                })
                .catch((error) => console.error('Error sharing:', error));
        }
    };

    // Check if Web Share API is available
    const isShareAvailable = typeof navigator !== 'undefined' && 'share' in navigator;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-lg font-semibold">Share This Product</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4">
                    <p className="text-gray-600 mb-4">
                        Share {product.name} with your friends and colleagues
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {sharePlatforms.map((platform) => (
                            <button
                                key={platform.name}
                                onClick={() => handleShare(platform.url)}
                                className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md text-white transition-colors ${platform.color}`}
                            >
                                {platform.icon}
                                {platform.name}
                            </button>
                        ))}
                    </div>

                    {isShareAvailable && (
                        <button
                            onClick={handleNativeShare}
                            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-2"
                        >
                            <Share className="w-5 h-5" />
                            Share via Device
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
