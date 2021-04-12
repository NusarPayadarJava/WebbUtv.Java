package com.nunu.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long  id;
    private String product_id;
    private String name;
    private Integer cost;
    private String category;


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }


    public String getProId() {
        return product_id;
    }
    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }


    public String getCat() {
        return category;
    }

    public void setCat(String category) {
        this.category = category;
    }
}
