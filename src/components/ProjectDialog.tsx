import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, FileText, Presentation } from "lucide-react";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    video?: string;
    links?: {
      github?: string;
      paper?: string;
      slides?: string;
      presentation?: string;
    };
  };
}

export const ProjectDialog = ({ open, onOpenChange, project }: ProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {project.video ? (
            <video
              className="w-full aspect-video rounded-lg object-cover"
              controls
              src={project.video}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video rounded-lg object-cover"
            />
          )}
          <p className="mt-4 text-muted-foreground">{project.description}</p>
          
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links?.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {project.links?.paper && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2" />
                  Paper
                </a>
              </Button>
            )}
            {project.links?.slides && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.slides} target="_blank" rel="noopener noreferrer">
                  <Presentation className="mr-2" />
                  Slides
                </a>
              </Button>
            )}
            {project.links?.presentation && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.presentation} target="_blank" rel="noopener noreferrer">
                  <Presentation className="mr-2" />
                  Presentation
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};