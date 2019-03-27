package org.wecancodeit.sketchflex.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class Sketch {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	@Lob
	private String imageLocation;
	
	@ManyToOne
	private SketchDeck sketchDeck;
	
	protected Sketch() {
		//WHYYYYY????????
	}

	public Sketch(String name, String imageLocation, SketchDeck sketchDeck) {
		this.name = name;
		this.setImageLocation(imageLocation);
		this.sketchDeck = sketchDeck;
	}

	public Sketch(String name, String imageLocation) {
		this.name = name;
		this.setImageLocation(imageLocation);
	}

	public Long getId() {
		return id;
	}

	public Object getName() {
		return name;
	}

	public String getImageLocation() {
		return imageLocation;
	}

	public void setImageLocation(String imageLocation) {
		this.imageLocation = imageLocation;
	}

	public SketchDeck getSketchDeck() {
		return sketchDeck;
	}
	public void moveDeck(SketchDeck newSketchDeck) {
		this.sketchDeck = newSketchDeck;
		
	}
	public void changeName(String newName) {
		this.name = newName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Sketch other = (Sketch) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}




}
