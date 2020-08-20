package us.robmclean.personalsite;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Post {
    private @Id @GeneratedValue Long id;
    private String content;

    public Post() {}

    public Post(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(this.id, post.id) &&
                Objects.equals(this.content, post.content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.content);
    }

    public Long getId() {
        return this.id;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    @Override
    public String toString() {
        return "Employee {" +
                "\tId: " + this.id +
                "\tContent: " + this.content;
    }
}
