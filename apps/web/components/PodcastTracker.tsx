import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, Headphones, Clock, Plus } from "lucide-react";

const PodcastTracker = () => {
  // Sample data structure
  const [episodes, setEpisodes] = useState([
    {
      id: 1,
      title: "The Future of AI",
      podcast: "Tech Talk",
      votes: 42,
      listened: true,
    },
    {
      id: 2,
      title: "History of Rome",
      podcast: "History Hour",
      votes: 38,
      listened: true,
    },
    {
      id: 3,
      title: "Modern Psychology",
      podcast: "Mind Matters",
      votes: 25,
      listened: false,
    },
  ]);

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: "Space Exploration",
      podcast: "Science Today",
      recommendedBy: "user123",
    },
  ]);

  const [newRecommendation, setNewRecommendation] = useState({
    title: "",
    podcast: "",
  });

  const handleVote = (episodeId) => {
    setEpisodes(
      episodes.map((episode) =>
        episode.id === episodeId
          ? { ...episode, votes: episode.votes + 1 }
          : episode
      )
    );
  };

  const handleAddRecommendation = () => {
    if (newRecommendation.title && newRecommendation.podcast) {
      setRecommendations([
        ...recommendations,
        {
          id: recommendations.length + 1,
          ...newRecommendation,
          recommendedBy: "anonymous",
        },
      ]);
      setNewRecommendation({ title: "", podcast: "" });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Tabs defaultValue="ranked" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ranked">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Ranked Episodes
          </TabsTrigger>
          <TabsTrigger value="unwatched">
            <Clock className="w-4 h-4 mr-2" />
            Unwatched
          </TabsTrigger>
          <TabsTrigger value="recommendations">
            <Plus className="w-4 h-4 mr-2" />
            Recommendations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ranked">
          <Card>
            <CardHeader>
              <CardTitle>Ranked Episodes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {episodes
                  .filter((ep) => ep.listened)
                  .sort((a, b) => b.votes - a.votes)
                  .map((episode) => (
                    <div
                      key={episode.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold">{episode.title}</h3>
                        <p className="text-sm text-gray-500">
                          {episode.podcast}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold">
                          {episode.votes}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleVote(episode.id)}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unwatched">
          <Card>
            <CardHeader>
              <CardTitle>Episodes to Listen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {episodes
                  .filter((ep) => !ep.listened)
                  .map((episode) => (
                    <div
                      key={episode.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold">{episode.title}</h3>
                        <p className="text-sm text-gray-500">
                          {episode.podcast}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Headphones className="w-4 h-4 mr-2" />
                        Mark as Listened
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>Recommend Episodes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Episode Title"
                    value={newRecommendation.title}
                    onChange={(e) =>
                      setNewRecommendation({
                        ...newRecommendation,
                        title: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Podcast Name"
                    value={newRecommendation.podcast}
                    onChange={(e) =>
                      setNewRecommendation({
                        ...newRecommendation,
                        podcast: e.target.value,
                      })
                    }
                  />
                  <Button onClick={handleAddRecommendation}>
                    Add Recommendation
                  </Button>
                </div>

                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold">{rec.title}</h3>
                      <p className="text-sm text-gray-500">{rec.podcast}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        Recommended by {rec.recommendedBy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PodcastTracker;
