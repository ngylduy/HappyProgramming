package com.swp.hg.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StorageService {
    String saveFile(String fileName, MultipartFile multipartFile)
            throws IOException ;
}
