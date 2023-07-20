package com.swp.hg.controller;

import com.swp.hg.entity.ImageDTO;
import com.swp.hg.service.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@RestController
@RequestMapping("/api/image")
@RequiredArgsConstructor
public class StorageController {
    private final StorageService service;
    private final ResourceLoader resourceLoader;
    private static final String UPLOAD_DIR = "images";

    @PostMapping("/uploadFile")
    public ResponseEntity<ImageDTO> uploadFile(
            @RequestParam("file") MultipartFile multipartFile)
            throws IOException {

        String fileName = StringUtils.cleanPath(Objects.requireNonNull(multipartFile.getOriginalFilename()));
        String fileCode = service.saveFile(fileName, multipartFile);
        ImageDTO response = new ImageDTO();
        response.setFileName(fileName);
        response.setFileUri("/api/image/" + fileCode + "-" + fileName);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable("filename") String filename) throws IOException {
        Path imagePath = Paths.get(UPLOAD_DIR).toAbsolutePath().resolve(filename);

        Resource resource = resourceLoader.getResource("file:" + imagePath.toString());
        if (resource.exists()) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
