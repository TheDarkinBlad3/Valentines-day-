"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ValentineRequest() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-6 p-6">
          {!showMessage ? (
            <Button
              onClick={() => setShowMessage(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              Click Me!
            </Button>
          ) : (
            <div className="text-center space-y-4 animate-fade-in">
              <Heart className="mx-auto text-red-500 animate-pulse" size={64} />
              <h1 className="text-3xl font-bold text-red-600">Will you be my Valentine?</h1>
              <p className="text-lg text-gray-700">I love you more than all the stars in the sky! ❤️</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

