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
    details?: string;
    links?: {
      github?: string;
      paper?: string;
      slides?: string;
    };
  };
}

export const ProjectDialog = ({ open, onOpenChange, project }: ProjectDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <p className="text-muted-foreground">{project.description}</p>
        </DialogHeader>
        <div className="mt-4">
          {project.video ? (
            <div className="aspect-video w-full">
              <iframe
                src={project.video}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video rounded-lg object-cover"
            />
          )}
          
          {project.details && (
            <p className="mt-4 text-muted-foreground">{project.details}</p>
          )}
          
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">Technologies</h3>
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
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.links?.paper && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Paper
                </a>
              </Button>
            )}
            {project.links?.slides && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.slides} target="_blank" rel="noopener noreferrer">
                  <Presentation className="mr-2 h-4 w-4" />
                  Slides
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};